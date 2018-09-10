import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadProjectsFail, LoadProjectsSuccess, ProjectsActionTypes} from '../actions/projects.actions';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {catchError, map, switchMap} from 'rxjs/operators';
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
    )
  );

  constructor(private actions$: Actions, private projectsService: ProjectService) {}
}
