import {TestResult} from '@app/core/api/testra/models';
import {
  LoadResults,
  LoadResultsFail,
  LoadResultsSuccess,
  LoadResultsPayload,
} from '@app/results/actions/results.actions';


export class ActionsFactory {

  static newLoadResultsAction(payload: LoadResultsPayload): LoadResults {
    return new LoadResults(payload);
  }

  static newLoadResultsSuccessAction(result: Array<TestResult>): LoadResultsSuccess {
    return new LoadResultsSuccess(result);
  }

  static newLoadResultsFailAction(err: any): LoadResultsFail {
    return new LoadResultsFail(err);
  }
}
