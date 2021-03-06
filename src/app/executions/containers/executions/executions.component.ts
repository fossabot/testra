import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as fromProject from '@app/projects/reducers/projects.reducer';
import {allProjects} from '@app/projects/reducers/projects.reducer';
import * as fromExecution from '@app/executions/reducers/executions.reducer';
import {Observable, Subscription} from 'rxjs';
import {Project} from '@app/core/api/testra/models/project';
import {catchError, map} from 'rxjs/operators';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-executions',
  templateUrl: './executions.component.html',
  styleUrls: ['./executions.component.scss']
})
export class ExecutionsComponent implements OnInit, OnDestroy {

  projectNameFromRoute: string;
  executionIdFromRoute: string;
  projectId: string;
  paramsSubscription: Subscription;
  projectsSubscription: Subscription;
  projectServiceSubscription: Subscription;

  private projects$: Observable<Project[]>;

  styleDisplay = 'block';
  contentNgClass = 'col-md-9';

  constructor(private activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private projectStore: Store<fromProject.ProjectState>,
              private executionStore: Store<fromExecution.ExecutionState>,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.projects$ = this.projectStore.pipe(select(allProjects));

    this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
        this.projectNameFromRoute = params['projectName'];
        this.executionIdFromRoute = params['executionId'];

        this.projectsSubscription = this.projects$.pipe(
          map(projects => projects.find(project => project.name === this.projectNameFromRoute))
        ).subscribe(project => {
          if (project != null) {
            this.projectId = project.id;
          } else {
            this.projectServiceSubscription =
              this.projectService.getProject(this.projectNameFromRoute)
                .pipe(
                  map(p => this.projectId = String(p.id)),
                  catchError(e => e) // TODO: Handle this route
                ).subscribe(() => this.changeDetectorRef.detectChanges());
          }
        });
      }
    );
  }

  toggleSideBar(on: boolean) {
    if (on) {
      this.styleDisplay = 'block';
      this.contentNgClass = 'col-md-9';
    } else {
      this.styleDisplay = 'none';
      this.contentNgClass = 'col-md-12';
    }
  }

  ngOnDestroy(): void {
    this.executionStore.dispatch(ActionsFactory.newSelectExecutionAction(null));

    this.paramsSubscription.unsubscribe();
    this.projectsSubscription.unsubscribe();
    if (this.projectServiceSubscription != null) {
      this.projectServiceSubscription.unsubscribe();
    }
  }
}
