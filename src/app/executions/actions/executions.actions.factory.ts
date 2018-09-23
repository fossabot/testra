import {Execution} from '@app/core/api/testra/models';
import {
  DeleteExecution,
  DeleteExecutionFail, DeleteExecutionPayload,
  DeleteExecutionSuccess,
  LoadExecutions,
  LoadExecutionsFail,
  LoadExecutionsSuccess
} from '@app/executions/actions/executions.actions';


export class ActionsFactory {

  static newLoadExecutionsAction(): LoadExecutions {
    return new LoadExecutions();
  }

  static newLoadExecutionsSuccessAction(execution: Array<Execution>): LoadExecutionsSuccess {
    return new LoadExecutionsSuccess(execution);
  }

  static newLoadExecutionsFailAction(err: any): LoadExecutionsFail {
    return new LoadExecutionsFail(err);
  }

  static newDeleteExecutionAction(payload: DeleteExecutionPayload): DeleteExecution {
    return new DeleteExecution(payload);
  }

  static newDeleteExecutionSuccessAction(payload: DeleteExecutionPayload): DeleteExecutionSuccess {
    return new DeleteExecutionSuccess(payload);
  }

  static newDeleteExecutionFailAction(err: any): DeleteExecutionFail {
    return new DeleteExecutionFail(err);
  }
}
