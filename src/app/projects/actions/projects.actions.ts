import {Action} from '@ngrx/store';
import {Project} from '@app/core/api/testra/models/project';
import {ProjectRequest} from '@app/core/api/testra/models/project-request';

export enum ProjectsActionTypes {
  LoadProjects = '[Projects] Load Projects',
  LoadProjectsSuccess = '[Projects] Load Projects Success',
  LoadProjectsFail = '[Projects] Load Projects Fail',
  CreateProject = '[Projects] Create Project',
  CreateProjectSuccess = '[Projects] Create Project Success',
  CreateProjectFail = '[Projects] Create Project Fail',
  DeleteProject = '[Projects] Delete Project',
  DeleteProjectSuccess = '[Projects] Delete Project Success',
  DeleteProjectFail = '[Projects] Delete Project Fail',
  UpdateProject = '[Projects] Update Project',
  UpdateProjectSuccess = '[Projects] Update Project Success',
  UpdateProjectFail = '[Projects] Update Project Fail'
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

export class CreateProject implements Action {
  readonly type = ProjectsActionTypes.CreateProject;

  constructor(public payload: ProjectRequest) {
  }
}

export class CreateProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.CreateProjectSuccess;

  constructor(public payload: Project) {
  }
}

export class CreateProjectFail implements Action {
  readonly type = ProjectsActionTypes.CreateProjectFail;

  constructor(public payload: any) {
  }
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;

  constructor(public id: string) {
  }
}

export class DeleteProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.DeleteProjectSuccess;

  constructor(public id: string) {
  }
}

export class DeleteProjectFail implements Action {
  readonly type = ProjectsActionTypes.DeleteProjectFail;

  constructor(public payload: any) {
  }
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
}

export class UpdateProjectSuccess implements Action {
  readonly type = ProjectsActionTypes.UpdateProjectSuccess;

  constructor(
    public id: string,
    public changes: Partial<Project>,
  ) {
  }
}

export class UpdateProjectFail implements Action {
  readonly type = ProjectsActionTypes.UpdateProjectFail;

  constructor(public payload: any) {
  }
}

export type ProjectsActions =
  LoadProjects |
  LoadProjectsSuccess |
  LoadProjectsFail |
  CreateProject |
  CreateProjectSuccess |
  CreateProjectFail |
  DeleteProject |
  DeleteProjectSuccess |
  DeleteProjectFail |
  UpdateProject |
  UpdateProjectSuccess |
  UpdateProjectFail;
