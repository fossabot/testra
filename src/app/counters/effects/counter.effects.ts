import { Injectable } from '@angular/core';
import { Counter } from '@app/core/api/testra/models/counter';
import { CounterService } from '@app/core/api/testra/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CounterActionTypes } from '../actions/counter.actions';
import { ActionsFactory } from '../actions/counters.actions.factory';

@Injectable()
export class CounterEffects {
  @Effect()
  loadCounters$: Observable<Action> = this.actions$.pipe(
    ofType(CounterActionTypes.LOAD_COUNTERS),
    switchMap(() =>
      this.counterService.getCounters().pipe(
        map((counter: Counter) => ActionsFactory.newLoadCountersSuccessAction(counter)),
        catchError(error => of(ActionsFactory.newLoadCountersFailAction(error)))
      )
    )
  );

  constructor(private actions$: Actions, private counterService: CounterService) {}
}
