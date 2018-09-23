import {ExecutionsActions, ExecutionsActionTypes} from '../actions/executions.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Execution} from '@app/core/api/testra/models/execution';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends EntityState<Execution> {
}

export function sortByDate(a: Execution, b: Execution): number {
  return a.startTime - b.startTime;
}

export const adapter: EntityAdapter<Execution> = createEntityAdapter<Execution>({
  sortComparer: sortByDate,
});

export const initialState: State = adapter.getInitialState();

export const {
  selectIds: selectExecutionIds,
  selectEntities: selectExecutionEntities,
  selectAll: selectAllExecutions,
  selectTotal: executionsCount
} = adapter.getSelectors();


export function reducer(state: State = initialState, action: ExecutionsActions): State {
  switch (action.type) {
    case ExecutionsActionTypes.LoadExecutions:
      return state;
    case ExecutionsActionTypes.LoadExecutionsSuccess:
      return adapter.addAll(action.payload, state);
    case ExecutionsActionTypes.LoadExecutionsFail:
      return state;
    default:
      return state;

    case ExecutionsActionTypes.DeleteExecution:
    case ExecutionsActionTypes.DeleteExecutionFail:
      return state;
    case ExecutionsActionTypes.DeleteExecutionSuccess:
      return adapter.removeOne(action.payload.executionId, state);
  }
}

export const getExecutionState = createFeatureSelector<State>('executions');

export const allExecutions = createSelector(getExecutionState, selectAllExecutions);
