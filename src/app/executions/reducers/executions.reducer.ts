import {ExecutionsActions, ExecutionsActionTypes} from '../actions/executions.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Execution} from '@app/core/api/testra/models/execution';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';

export interface ExecutionState extends EntityState<Execution> {
  loading: boolean;
  selectedExecutionId: string | null;
  currentExecutionStats: TestExecutionStats;
}

export function sortByDate(a: Execution, b: Execution): number {
  return b.startTime - a.startTime;
}

export const adapter: EntityAdapter<Execution> = createEntityAdapter<Execution>({
  sortComparer: sortByDate,
});

export const initialState: ExecutionState =
  adapter.getInitialState({loading: false, selectedExecutionId: null, currentExecutionStats: null});

export const {
  selectIds: selectExecutionIds,
  selectEntities: selectExecutionEntities,
  selectAll: selectAllExecutions,
  selectTotal: executionsCount
} = adapter.getSelectors();


export function reducer(state: ExecutionState = initialState, action: ExecutionsActions): ExecutionState {
  switch (action.type) {
    case ExecutionsActionTypes.LoadExecutions:
      return {...state, loading: true};
    case ExecutionsActionTypes.LoadExecutionsSuccess:
      return {...adapter.addAll(action.payload, state), loading: false};
    case ExecutionsActionTypes.LoadExecutionsFail:
      return {...state, loading: false};
    default:
      return state;

    case ExecutionsActionTypes.DeleteExecution:
    case ExecutionsActionTypes.DeleteExecutionFail:
      return state;
    case ExecutionsActionTypes.DeleteExecutionSuccess:
      return adapter.removeOne(action.payload.executionId, state);
    case ExecutionsActionTypes.SelectExecution:
      return {...state, selectedExecutionId: action.executionId};
    case ExecutionsActionTypes.LoadExecutionStats:
      return state;
    case ExecutionsActionTypes.LoadExecutionStatsSuccess:
      return {...state, currentExecutionStats: action.payload};
    case ExecutionsActionTypes.LoadExecutionStatsFail:
      return state;
  }
}

export const getExecutionState = createFeatureSelector<ExecutionState>('executions');

export const allExecutions = createSelector(getExecutionState, selectAllExecutions);

export const selectExecutionsLoading = createSelector(getExecutionState, state => state.loading);

export const getCurrentExecutionId = createSelector(
  getExecutionState,
  executionState => executionState.selectedExecutionId
);

export const getCurrentExecution = createSelector(
  getExecutionState,
  getCurrentExecutionId,
  (state: ExecutionState, currentExecutionId: string) => {
    if (currentExecutionId == null) {
      return null;
    } else {
      return state.entities[currentExecutionId];
    }
  }
);

export const getCurrentExecutionStats = createSelector(
  getExecutionState,
  getCurrentExecutionId,
  (state: ExecutionState, currentExecId: string) => {
    if (currentExecId == null) {
      return null;
    } else {
      return state.currentExecutionStats;
    }
  }
);
