import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadResults, ResultsActionTypes} from '../actions/results.actions';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {ResultService} from '@app/core/api/testra/services/result.service';
import {ActionsFactory} from '@app/results/actions/results.actions.factory';
import {of} from 'rxjs';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';
import GetResultsParams = ResultService.GetResultsParams;

@Injectable()
export class ResultsEffects {

  @Effect()
  loadResults$ = this.actions$.pipe(
    ofType(ResultsActionTypes.LoadResults),
    switchMap((action: LoadResults) => {
        const getResultsParam: GetResultsParams = {
          projectId: action.payload.projectId,
          executionId: action.payload.executionId,
          status: action.payload.status
        };
        return this.resultService.getResults(getResultsParam).pipe(
          map((results: Array<EnrichedTestResult>) => ActionsFactory.newLoadResultsSuccessAction(results)),
          catchError(error => of(ActionsFactory.newLoadResultsFailAction(error)))
        );
      }
    ),
    share()
  );

  constructor(private actions$: Actions, private resultService: ResultService) {
  }
}
