import {EnrichedTestResult} from '@app/core/api/testra/models';
import {
  EmptyResults,
  LoadResults,
  LoadResultsFail,
  LoadResultsPayload,
  LoadResultsSuccess,
} from '@app/results/actions/results.actions';


export class ActionsFactory {

  static newLoadResultsAction(payload: LoadResultsPayload): LoadResults {
    return new LoadResults(payload);
  }

  static newLoadResultsSuccessAction(result: Array<EnrichedTestResult>): LoadResultsSuccess {
    return new LoadResultsSuccess(result);
  }

  static newLoadResultsFailAction(err: any): LoadResultsFail {
    return new LoadResultsFail(err);
  }

  static newEmptyResultsAction(): EmptyResults {
    return new EmptyResults();
  }
}
