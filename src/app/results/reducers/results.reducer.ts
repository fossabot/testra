import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ResultsActions, ResultsActionTypes} from '../actions/results.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';

export interface ResultState extends EntityState<EnrichedTestResult> {
  loading: boolean;
}

export function sortByDate(a: EnrichedTestResult, b: EnrichedTestResult): number {
  return b.startTime - a.startTime;
}

export const adapter: EntityAdapter<EnrichedTestResult> = createEntityAdapter<EnrichedTestResult>({
  sortComparer: sortByDate,
});

export const initialState: ResultState = adapter.getInitialState({loading: false});

export const {
  selectIds: selectResultIds,
  selectEntities: selectResultEntities,
  selectAll: selectAllResults,
  selectTotal: resultsCount
} = adapter.getSelectors();


export function reducer(state: ResultState = initialState, action: ResultsActions): ResultState {
  switch (action.type) {
    case ResultsActionTypes.LoadResults:
      return { ...state, loading: true };
    case ResultsActionTypes.LoadResultsSuccess:
      return { ...adapter.addAll(action.payload, state), loading: false };
    case ResultsActionTypes.LoadResultsFail:
      return { ...state, loading: false };
    case ResultsActionTypes.EmptyResultsStore:
      return { ...state, ids: [], entities: {}};
    default:
      return state;
  }
}

export const getResultState = createFeatureSelector<ResultState>('results');

export const allResults = createSelector(getResultState, selectAllResults);

export const selectResultsLoading = createSelector(getResultState, state => state.loading);
