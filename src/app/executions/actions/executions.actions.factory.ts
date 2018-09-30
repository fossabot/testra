import {Execution, TestExecutionStats} from '@app/core/api/testra/models';
import {
  DeleteExecution,
  DeleteExecutionFail,
  DeleteExecutionPayload,
  DeleteExecutionSuccess,
  LoadExecutions,
  LoadExecutionsFail,
  LoadExecutionsSuccess,
  LoadExecutionStats,
  LoadExecutionStatsFail,
  LoadExecutionStatsSuccess,
  SelectExecution
} from '@app/executions/actions/executions.actions';


export class ActionsFactory {

  static newLoadExecutionsAction(projectId: string): LoadExecutions {
    return new LoadExecutions(projectId);
  }

  static newLoadExecutionsSuccessAction(execution: Array<Execution>): LoadExecutionsSuccess {
    return new LoadExecutionsSuccess(execution);
  }

  static newLoadExecutionsFailAction(err: any): LoadExecutionsFail {
    return new LoadExecutionsFail(err);
  }

  static newLoadExecutionStatsAction(projectId: string, executionId: string): LoadExecutionStats {
    return new LoadExecutionStats(projectId, executionId);
  }

  static newLoadExecutionStatsSuccessAction(executionStats: TestExecutionStats): LoadExecutionStatsSuccess {
    return new LoadExecutionStatsSuccess(executionStats);
  }

  static newLoadExecutionStatsFailAction(err: any): LoadExecutionStatsFail {
    return new LoadExecutionStatsFail(err);
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

  static newSelectExecutionAction(executionId: string): SelectExecution {
    return new SelectExecution(executionId);
  }
}
