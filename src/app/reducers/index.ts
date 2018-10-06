import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '@env/environment';
import * as fromCounter from '../counters/reducers/counter.reducer';
import * as fromProjects from '../projects/reducers/projects.reducer';
import * as fromExecutions from '../executions/reducers/executions.reducer';
import * as fromResults from '../results/reducers/results.reducer';
import * as fromTestGroups from '../test-groups/reducers/test-groups.reducer';

export interface State {
  counters: fromCounter.State;
  projects: fromProjects.ProjectState;
  executions: fromExecutions.ExecutionState;
  results: fromResults.ResultState;
  testGroups: fromTestGroups.TestGroupState;
}

export const reducers: ActionReducerMap<State> = {
  counters: fromCounter.reducer,
  projects: fromProjects.reducer,
  executions: fromExecutions.reducer,
  results: fromResults.reducer,
  testGroups: fromTestGroups.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
