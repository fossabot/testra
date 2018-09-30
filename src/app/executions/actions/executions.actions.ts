import {Action} from '@ngrx/store';
import {Execution} from '@app/core/api/testra/models/execution';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';

export enum ExecutionsActionTypes {
  LoadExecutions = '[Executions] Load Executions',
  LoadExecutionsSuccess = '[Executions] Load Executions Success',
  LoadExecutionsFail = '[Executions] Load Executions Fail',
  LoadExecutionStats = '[Executions] Load Execution Stats',
  LoadExecutionStatsSuccess = '[Executions] Load Execution Stats Success',
  LoadExecutionStatsFail = '[Executions] Load Execution Stats Fail',
  DeleteExecution = '[Executions] Delete Execution',
  DeleteExecutionSuccess = '[Executions] Delete Execution Success',
  DeleteExecutionFail = '[Executions] Delete Execution Fail',
  SelectExecution = '[Executions] Select Execution'
}

export interface DeleteExecutionPayload {
  projectId: string;
  executionId: string;
}

export class LoadExecutions implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutions;

  constructor(public projectId: string) {
  }
}

export class LoadExecutionsSuccess implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutionsSuccess;

  constructor(public payload: Array<Execution>) {
  }
}

export class LoadExecutionsFail implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutionsFail;

  constructor(public payload: any) {
  }
}

export class DeleteExecution implements Action {
  readonly type = ExecutionsActionTypes.DeleteExecution;

  constructor(public payload: DeleteExecutionPayload) {
  }
}

export class DeleteExecutionSuccess implements Action {
  readonly type = ExecutionsActionTypes.DeleteExecutionSuccess;

  constructor(public payload: DeleteExecutionPayload) {
  }
}

export class DeleteExecutionFail implements Action {
  readonly type = ExecutionsActionTypes.DeleteExecutionFail;

  constructor(public payload: any) {
  }
}

export class SelectExecution implements Action {
  readonly type = ExecutionsActionTypes.SelectExecution;

  constructor(public executionId: string) {
  }
}

export class LoadExecutionStats implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutionStats;

  constructor(public projectId: string, public executionId: string) {
  }
}

export class LoadExecutionStatsSuccess implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutionStatsSuccess;

  constructor(public payload: TestExecutionStats) {
  }
}

export class LoadExecutionStatsFail implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutionStatsFail;

  constructor(public payload: any) {
  }
}

export type ExecutionsActions =
  LoadExecutions |
  LoadExecutionsSuccess |
  LoadExecutionsFail |
  DeleteExecution |
  DeleteExecutionSuccess |
  DeleteExecutionFail |
  SelectExecution |
  LoadExecutionStats |
  LoadExecutionStatsSuccess |
  LoadExecutionStatsFail;
