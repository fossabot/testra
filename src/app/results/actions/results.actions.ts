import {Action} from '@ngrx/store';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';

export enum ResultsActionTypes {
  LoadResults = '[Results] Load Results',
  LoadResultsSuccess = '[Results] Load Results Success',
  LoadResultsFail = '[Results] Load Results Fai',
  EmptyResultsStore = '[Results/Store] Empty Results'
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

  constructor(public payload: Array<EnrichedTestResult>) {
  }
}

export class LoadResultsFail implements Action {
  readonly type = ResultsActionTypes.LoadResultsFail;

  constructor(public payload: any) {
  }
}

export class EmptyResults implements Action {
  readonly type = ResultsActionTypes.EmptyResultsStore;

  constructor() {
  }
}

export type ResultsActions = LoadResults | LoadResultsFail | LoadResultsSuccess | EmptyResults;
