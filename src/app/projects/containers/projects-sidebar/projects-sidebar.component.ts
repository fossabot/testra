import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {Project} from '@app/core/api/testra/models/project';
import {select, Store} from '@ngrx/store';
import * as fromProjects from '@app/projects/reducers/projects.reducer';
import {getCurrentProject, projectsCount, selectProjectsLoading} from '@app/projects/reducers/projects.reducer';
import {ProjectsEffects} from '@app/projects/effects/projects.effects';
import {ActionsFactory} from '@app/projects/actions/projects.actions.factory';
import {ofType} from '@ngrx/effects';
import {CreateProjectFail, ProjectsActionTypes} from '@app/projects/actions/projects.actions';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';
import {filter, map} from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.scss']
})
export class ProjectsSidebarComponent implements OnInit, OnDestroy {
  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;
  projectsTotal$: Observable<number>;
  currentProject$: Observable<Project>;
  message$: Subject<string> = new Subject();

  @Input() projectNameFromRoute: string;

  msg = 'message';

  loadProjectFail$: Subscription;
  loadProjectSuccess$: Subscription;
  createProjectFail$: Subscription;
  createProjectSuccess$: Subscription;
  projectsSubscription$: Subscription;

  isProjectLoadSuccess = true;

  constructor(private store: Store<fromProjects.ProjectState>,
              private projectEffects: ProjectsEffects) {
  }

  ngOnInit() {
    this.projects$ = this.store.pipe(select(fromProjects.allProjects));
    this.loading$ = this.store.pipe(select(selectProjectsLoading));
    this.currentProject$ = this.store.pipe(select(getCurrentProject));
    this.projectsTotal$ = this.store.pipe(select(projectsCount));

    this.store.dispatch(ActionsFactory.newLoadProjectsAction());

    this.loadProjectSuccess$ = this.projectEffects.loadProjects$
      .pipe(ofType(ProjectsActionTypes.LoadProjectsSuccess))
      .subscribe(() => {
        this.isProjectLoadSuccess = true;
        if (this.projectNameFromRoute !== undefined) {
          this.selectProject(this.projectNameFromRoute);
        }
      });

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

  removeProject(id: string) {
    this.store.dispatch(ActionsFactory.newDeleteProjectAction(id));
  }

  createProject(projectReq: ProjectRequest) {
    this.store.dispatch(ActionsFactory.newCreateProjectAction(projectReq));
  }

  selectProject(projectName: string) {
    if (this.projectsSubscription$) {
      this.projectsSubscription$.unsubscribe();
    }
    this.projectsSubscription$ = this.projects$
      .pipe(
        map(projectsList => projectsList.find(project => project.name === projectName)),
        filter(project => project != null)
      )
      .subscribe(project => this.store.dispatch(ActionsFactory.newSelectProjectAction(project.id)));
  }

  ngOnDestroy() {
    this.loadProjectFail$.unsubscribe();
    this.loadProjectSuccess$.unsubscribe();
    this.createProjectFail$.unsubscribe();
    this.createProjectSuccess$.unsubscribe();
    if (this.projectsSubscription$ !== undefined) {
      this.projectsSubscription$.unsubscribe();
    }
  }
}
