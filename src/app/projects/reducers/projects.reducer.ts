import {ProjectsActions, ProjectsActionTypes} from '../actions/projects.actions';
import {Project} from '@app/core/api/testra/models/project';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends EntityState<Project> {
}

export function sortByName(a: Project, b: Project): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  sortComparer: sortByName,
});

export const initialState: State = adapter.getInitialState({});

export const {
  selectIds: selectProjectIds,
  selectEntities: selectProjectEntities,
  selectAll: selectAllProjects,
  selectTotal: projectsCount
} = adapter.getSelectors();

export function reducer(state: State = initialState, action: ProjectsActions): State {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjects:
      return state;
    case ProjectsActionTypes.LoadProjectsSuccess:
      return adapter.addAll(action.payload, state);
    case ProjectsActionTypes.LoadProjectsFail:
      return state;
    default:
      return state;
  }
}

export const getProjectState = createFeatureSelector<State>('projects');

export const allProjects = createSelector(getProjectState, selectAllProjects);
