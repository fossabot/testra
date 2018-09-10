import {ProjectsActions, ProjectsActionTypes} from '../actions/projects.actions';
import {Project} from '@app/core/api/testra/models/project';

export interface State {
  projects: Project[];
}

export const initialState: State = {
  projects: []
};

export function reducer(state: State = initialState, action: ProjectsActions): State {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjects:
      return state;
    case ProjectsActionTypes.LoadProjectsSuccess:
      return { projects: Array.from(action.payload) };
    case ProjectsActionTypes.LoadProjectsFail:
      return { projects: Array.from(action.payload) };
    default:
      return state;
  }
}
