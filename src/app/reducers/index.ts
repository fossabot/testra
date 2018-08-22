import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from '../counters/reducers/counter.reducer';

export interface State {
  counters: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  counters: fromCounter.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
