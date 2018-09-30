import {Project, ProjectRequest} from '@app/core/api/testra/models';
import {
  CreateProject,
  CreateProjectFail,
  CreateProjectSuccess,
  DeleteProject,
  DeleteProjectFail,
  DeleteProjectSuccess,
  LoadProjects,
  LoadProjectsFail,
  LoadProjectsSuccess, SelectProject
} from '@app/projects/actions/projects.actions';


export class ActionsFactory {

  static newLoadProjectsAction(): LoadProjects {
    return new LoadProjects();
  }

  static newLoadProjectsSuccessAction(projects: Array<Project>): LoadProjectsSuccess {
    return new LoadProjectsSuccess(projects);
  }

  static newLoadProjectsFailAction(err: any): LoadProjectsFail {
    return new LoadProjectsFail(err);
  }

  static newCreateProjectAction(projectReq: ProjectRequest): CreateProject {
    return new CreateProject(projectReq);
  }

  static newCreateProjectSuccessAction(project: Project): CreateProjectSuccess {
    return new CreateProjectSuccess(project);
  }

  static newCreateProjectFailAction(err: any): CreateProjectFail {
    return new CreateProjectFail(err);
  }

  static newDeleteProjectAction(id: string): DeleteProject {
    return new DeleteProject(id);
  }

  static newDeleteProjectSuccessAction(id: string): DeleteProjectSuccess {
    return new DeleteProjectSuccess(id);
  }

  static newDeleteProjectFailAction(err: any): DeleteProjectFail {
    return new DeleteProjectFail(err);
  }

  static newSelectProjectAction(id: string): SelectProject {
    return new SelectProject(id);
  }
}
