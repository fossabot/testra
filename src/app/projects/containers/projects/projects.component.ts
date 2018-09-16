import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromProjects from '@app/projects/reducers/projects.reducer';
import {selectProjectsLoading} from '@app/projects/reducers/projects.reducer';
import {Observable, Subject, Subscription} from 'rxjs';
import {ActionsFactory} from '@app/projects/actions/projects.actions.factory';
import {Project} from '@app/core/api/testra/models/project';
import {CreateProjectFail, ProjectsActionTypes} from '@app/projects/actions/projects.actions';
import {ProjectsEffects} from '@app/projects/effects/projects.effects';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';
import {ofType} from '@ngrx/effects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;
  message$: Subject<string> = new Subject();

  msg = 'message';

  loadProjectFail$: Subscription;
  createProjectFail$: Subscription;
  createProjectSuccess$: Subscription;

  isProjectLoadSuccess = true;

  constructor(private store: Store<fromProjects.ProjectState>, private projectEffects: ProjectsEffects) {
    this.projects$ = this.store.pipe(select(fromProjects.allProjects));
    this.loading$ = this.store.pipe(select(selectProjectsLoading));
  }

  ngOnInit() {
    this.store.dispatch(ActionsFactory.newLoadProjectsAction());

    this.loadProjectFail$ = this.projectEffects.loadProjects$
      .pipe(ofType(ProjectsActionTypes.LoadProjectsFail))
      .subscribe(() => {
        this.isProjectLoadSuccess = false;
      });

    this.createProjectFail$ = this.projectEffects.createProjects$
      .pipe(ofType(ProjectsActionTypes.CreateProjectFail))
      .subscribe((action: CreateProjectFail) => {
        this.message$.next(action.payload.error.msg);
      });

    this.createProjectSuccess$ = this.projectEffects.createProjects$
      .pipe(ofType(ProjectsActionTypes.CreateProjectSuccess))
      .subscribe(() => this.message$.next('Project created successfully'));
  }

  ngOnDestroy() {
    this.loadProjectFail$.unsubscribe();
    this.createProjectFail$.unsubscribe();
    this.createProjectSuccess$.unsubscribe();
  }

  removeProject(id: string) {
    this.store.dispatch(ActionsFactory.newDeleteProjectAction(id));
  }

  createProject(projectReq: ProjectRequest) {
    this.store.dispatch(ActionsFactory.newCreateProjectAction(projectReq));
  }
}
