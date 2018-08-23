import { Action } from '@ngrx/store';
import { Counter } from '@app/core/api/testra/models/counter';

export enum CounterActionTypes {
  LOAD_COUNTERS = '[Counter] Load Counters',
  LOAD_COUNTERS_SUCCESS = '[Counter] Load Counters Success',
  LOAD_COUNTERS_FAIL = '[Counter] Load Counters Fail'
}

export class LoadCounters implements Action {
  readonly type = CounterActionTypes.LOAD_COUNTERS;
}

export class LoadCountersSuccess implements Action {
  readonly type = CounterActionTypes.LOAD_COUNTERS_SUCCESS;

  constructor(public payload: Counter) {}
}

export class LoadCountersFail implements Action {
  readonly type = CounterActionTypes.LOAD_COUNTERS_FAIL;

  constructor(public payload: any) {}
}

export type CounterActions = LoadCounters | LoadCountersSuccess | LoadCountersFail;
