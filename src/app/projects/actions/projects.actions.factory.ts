import {Project} from '@app/core/api/testra/models';
import {LoadProjects, LoadProjectsFail, LoadProjectsSuccess} from '@app/projects/actions/projects.actions';


export class ActionsFactory {

  static newLoadProjectsAction(): LoadProjects {
    return new LoadProjects();
  }

  static newLoadProjectsSuccessAction(project: Array<Project>): LoadProjectsSuccess {
    return new LoadProjectsSuccess(project);
  }

  static newLoadProjectsFailAction(err: any): LoadProjectsFail {
    return new LoadProjectsFail(err);
  }
}
