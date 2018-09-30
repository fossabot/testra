import {Action, createFeatureSelector, createSelector} from '@ngrx/store';
import { ResultsActions, ResultsActionTypes } from '../actions/results.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {TestResult} from '@app/core/api/testra/models/test-result';

export interface ResultState extends EntityState<TestResult> {
}

export function sortByDate(a: TestResult, b: TestResult): number {
  return b.startTime - a.startTime;
}

export const adapter: EntityAdapter<TestResult> = createEntityAdapter<TestResult>({
  sortComparer: sortByDate,
});

export const initialState: ResultState = adapter.getInitialState();

export const {
  selectIds: selectResultIds,
  selectEntities: selectResultEntities,
  selectAll: selectAllResults,
  selectTotal: resultsCount
} = adapter.getSelectors();


export function reducer(state: ResultState = initialState, action: ResultsActions): ResultState {
  switch (action.type) {
    case ResultsActionTypes.LoadResults:
      return state;
    case ResultsActionTypes.LoadResultsSuccess:
      return adapter.addAll(action.payload, state);
    case ResultsActionTypes.LoadResultsFail:
      return state;
    default:
      return state;
  }
}

export const getResultState = createFeatureSelector<ResultState>('results');

export const allResults = createSelector(getResultState, selectAllResults);
