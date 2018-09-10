import {Action} from '@ngrx/store';
import {Project} from '@app/core/api/testra/models/project';

export enum ProjectsActionTypes {
  LoadProjects = '[Projects] Load Projects',
  LoadProjectsSuccess = '[Projects] Load Projects Success',
  LoadProjectsFail = '[Projects] Load Projects Fail'
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsSuccess;

  constructor(public payload: Array<Project>) {
  }
}

export class LoadProjectsFail implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsFail;

  constructor(public payload: any) {
  }
}

export type ProjectsActions = LoadProjects | LoadProjectsSuccess | LoadProjectsFail;
