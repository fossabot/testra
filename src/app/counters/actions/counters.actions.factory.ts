import { LoadCounters, LoadCountersSuccess, LoadCountersFail } from './counter.actions';
import { Counter } from '@app/core/api/testra/models';


export class ActionsFactory {

  static newLoadCountersAction(): LoadCounters {
    return new LoadCounters();
  }

  static newLoadCountersSuccessAction(counter: Counter): LoadCountersSuccess {
    return new LoadCountersSuccess(counter);
  }

  static newLoadCountersFailAction(err: any): LoadCountersFail {
    return new LoadCountersFail(err);
  }
}
