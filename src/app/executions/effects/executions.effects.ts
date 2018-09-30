import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  DeleteExecution,
  ExecutionsActionTypes,
  LoadExecutions,
  LoadExecutionStats
} from '../actions/executions.actions';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Execution} from '@app/core/api/testra/models/execution';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';
import {ExecutionService} from '@app/core/api/testra/services/execution.service';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';
import DeleteExecutionParams = ExecutionService.DeleteExecutionParams;
import GetExecutionResultStatsParams = ExecutionService.GetExecutionResultStatsParams;

@Injectable()
export class ExecutionsEffects {

  @Effect()
  loadExecutions$ = this.actions$.pipe(
    ofType(ExecutionsActionTypes.LoadExecutions),
    switchMap((action: LoadExecutions) =>
      this.executionsService.getExecutions(action.projectId).pipe(
        map((executions: Array<Execution>) => ActionsFactory.newLoadExecutionsSuccessAction(executions)),
        catchError(error => of(ActionsFactory.newLoadExecutionsFailAction(error)))
      )
    ),
    share()
  );

  @Effect()
  loadExecutionStats$ = this.actions$.pipe(
    ofType(ExecutionsActionTypes.LoadExecutionStats),
    switchMap((action: LoadExecutionStats) => {
        const params: GetExecutionResultStatsParams = {projectId: action.projectId, id: action.executionId};
        return this.executionsService.getExecutionResultStats(params).pipe(
          map((executionStats: TestExecutionStats) =>
            ActionsFactory.newLoadExecutionStatsSuccessAction(executionStats)),
          catchError(error => of(ActionsFactory.newLoadExecutionsFailAction(error)))
        );
      }
    ),
    share()
  );

  @Effect()
  deleteExecutions$ = this.actions$.pipe(
    ofType(ExecutionsActionTypes.DeleteExecution),
    switchMap((action: DeleteExecution) => {
        const deleteExecutionParams: DeleteExecutionParams = {
          projectId: action.payload.projectId,
          id: action.payload.executionId
        };
        return this.executionsService.deleteExecution(deleteExecutionParams).pipe(
          map(() => ActionsFactory.newDeleteExecutionSuccessAction(action.payload)),
          catchError(error => of(ActionsFactory.newDeleteExecutionFailAction(error)))
        );
      }
    ),
    share()
  );

  constructor(private actions$: Actions, private executionsService: ExecutionService) {
  }
}
