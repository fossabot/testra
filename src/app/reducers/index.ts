import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromCounter from '../counters/reducers/counter.reducer';
import * as fromProjects from '../projects/reducers/projects.reducer';

export interface State {
  counters: fromCounter.State;
  projects: fromProjects.State;
}

export const reducers: ActionReducerMap<State> = {
  counters: fromCounter.reducer,
  projects: fromProjects.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
