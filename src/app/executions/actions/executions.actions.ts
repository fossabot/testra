import {Action} from '@ngrx/store';
import {Execution} from '@app/core/api/testra/models/execution';

export enum ExecutionsActionTypes {
  LoadExecutions = '[Executions] Load Executions',
  LoadExecutionsSuccess = '[Executions] Load Executions Success',
  LoadExecutionsFail = '[Executions] Load Executions Fail',
  DeleteExecution = '[Executions] Delete Execution',
  DeleteExecutionSuccess = '[Executions] Delete Execution Success',
  DeleteExecutionFail = '[Executions] Delete Execution Fail'
}

export interface DeleteExecutionPayload {
  projectId: string;
  executionId: string;
}

export class LoadExecutions implements Action {
  readonly type = ExecutionsActionTypes.LoadExecutions;
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

export type ExecutionsActions =
  LoadExecutions |
  LoadExecutionsSuccess |
  LoadExecutionsFail |
  DeleteExecution |
  DeleteExecutionSuccess |
  DeleteExecutionFail;
