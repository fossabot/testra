import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CounterActionTypes, LoadCountersFail, LoadCountersSuccess} from '../actions/counter.actions';
import {CounterService} from '@app/core/api/testra/services';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Counter} from '@app/core/api/testra/models/counter';
import {Action} from '@ngrx/store';

@Injectable()
export class CounterEffects {

  @Effect()
  loadCounters$: Observable<Action> =
    this.actions$.pipe(
      ofType(CounterActionTypes.LOAD_COUNTERS),
      switchMap(() =>
        this.counterService.getCounters().pipe(
          map((counters: Counter) => new LoadCountersSuccess(counters)),
          catchError(error => of(new LoadCountersFail(error)))
        )));

  constructor(private actions$: Actions, private counterService: CounterService) {
  }
}
