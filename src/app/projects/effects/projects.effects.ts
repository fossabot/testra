import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CreateProject, DeleteProject, ProjectsActionTypes} from '../actions/projects.actions';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Project} from '@app/core/api/testra/models/project';
import {ActionsFactory} from '@app/projects/actions/projects.actions.factory';

@Injectable()
export class ProjectsEffects {

  @Effect()
  loadProjects$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.LoadProjects),
    switchMap(() =>
      this.projectsService.getProjects().pipe(
        map((projects: Array<Project>) => ActionsFactory.newLoadProjectsSuccessAction(projects)),
        catchError(error => of(ActionsFactory.newLoadProjectsFailAction(error)))
      )
    ),
    share()
  );
  @Effect()
  createProjects$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.CreateProject),
    switchMap((action: CreateProject) =>
      this.projectsService.createProject(action.payload).pipe(
        map((projects: Project) => ActionsFactory.newCreateProjectSuccessAction(projects)),
        catchError(error => of(ActionsFactory.newCreateProjectFailAction(error)))
      )
    ),
    share()
  );
  @Effect()
  deleteProjects$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.DeleteProject),
    switchMap((action: DeleteProject) =>
      this.projectsService.deleteProject(action.id).pipe(
        map(() => ActionsFactory.newDeleteProjectSuccessAction(action.id)),
        catchError(error => of(ActionsFactory.newDeleteProjectFailAction(error)))
      )
    ),
    share()
  );

  constructor(private actions$: Actions, private projectsService: ProjectService) {
  }
}
