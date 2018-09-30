import { Action } from '@ngrx/store';
import {TestResult} from '@app/core/api/testra/models/test-result';

export enum ResultsActionTypes {
  LoadResults = '[Results] Load Results',
  LoadResultsSuccess = '[Results] Load Results Success',
  LoadResultsFail = '[Results] Load Results Fai'
}

export interface LoadResultsPayload {
  projectId: string;
  executionId: string;
  status: string;
}

export class LoadResults implements Action {
  readonly type = ResultsActionTypes.LoadResults;

  constructor(public payload: LoadResultsPayload) {
  }
}

export class LoadResultsSuccess implements Action {
  readonly type = ResultsActionTypes.LoadResultsSuccess;

  constructor(public payload: Array<TestResult>) {
  }
}

export class LoadResultsFail implements Action {
  readonly type = ResultsActionTypes.LoadResultsFail;

  constructor(public payload: any) {
  }
}
export type ResultsActions = LoadResults | LoadResultsFail | LoadResultsSuccess;
