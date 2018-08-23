import {Action} from '@ngrx/store';
import {CounterActions, CounterActionTypes} from '../actions/counter.actions';
import {Counter} from '../../core/api/testra/models/counter';

export interface State {
  counter: Counter;
  loading: boolean;
}

const initialCounter: Counter = {
  projectsCount: 0,
  testScenariosCount: 0,
  testCasesCount: 0,
  testExecutionsCount: 0,
  testResultsCount: 0
};

export const initialState: State = {
  counter: initialCounter,
  loading: false
};

export function reducer(state: State = initialState, action: CounterActions): State {
  switch (action.type) {
    case CounterActionTypes.LOAD_COUNTERS:
      return {...state, loading: true};
    case CounterActionTypes.LOAD_COUNTERS_SUCCESS:
      return {counter: action.payload, loading: false};
    case CounterActionTypes.LOAD_COUNTERS_FAIL:
      return {counter: action.payload, loading: false};
    default:
      return state;
  }
}
