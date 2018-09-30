import {ProjectsActions, ProjectsActionTypes} from '../actions/projects.actions';
import {Project} from '@app/core/api/testra/models/project';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ProjectState extends EntityState<Project> {
  loading: boolean;
  selectedProjectId: string | null;
}

export function sortByName(a: Project, b: Project): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  sortComparer: sortByName,
});

export const initialState: ProjectState =
  adapter.getInitialState({loading: false, selectedProjectId: null});

export const {
  selectIds: selectProjectIds,
  selectEntities: selectProjectEntities,
  selectAll: selectAllProjects,
  selectTotal: selectTotal
} = adapter.getSelectors();

export function reducer(state: ProjectState = initialState, action: ProjectsActions): ProjectState {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjects:
      return {...state, loading: true};
    case ProjectsActionTypes.LoadProjectsSuccess:
      return adapter.addAll(action.payload, {...state, loading: false});
    case ProjectsActionTypes.LoadProjectsFail:
      return {...state, loading: false};

    case ProjectsActionTypes.CreateProject:
    case ProjectsActionTypes.CreateProjectFail:
      return state;
    case ProjectsActionTypes.CreateProjectSuccess:
      return adapter.addOne(action.payload, state);

    case ProjectsActionTypes.DeleteProject:
    case ProjectsActionTypes.DeleteProjectFail:
      return state;
    case ProjectsActionTypes.DeleteProjectSuccess:
      return adapter.removeOne(action.id, state);

    case ProjectsActionTypes.UpdateProject:
    case ProjectsActionTypes.UpdateProjectFail:
      return state;
    case ProjectsActionTypes.UpdateProjectSuccess:
      return adapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);
    case ProjectsActionTypes.SelectProject:
      return {...state, selectedProjectId: action.projectId};

    default:
      return state;
  }
}

export const getProjectState = createFeatureSelector<ProjectState>('projects');

export const allProjects = createSelector(getProjectState, selectAllProjects);
export const projectsCount = createSelector(getProjectState, selectTotal);

export const selectProjectsLoading = createSelector(
  getProjectState,
  projectState => projectState.loading
);

export const getCurrentProjectId = createSelector(
  getProjectState,
  projectState => projectState.selectedProjectId
);

export const getCurrentProject = createSelector(
  getProjectState,
  getCurrentProjectId,
  (state: ProjectState, currentProjectId: string) => {
    if (currentProjectId == null) {
      return null;
    } else {
      return state.entities[currentProjectId];
    }
  }
);
