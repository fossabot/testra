import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {DeleteExecution, ExecutionsActionTypes} from '../actions/executions.actions';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Execution} from '@app/core/api/testra/models/execution';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';
import {ExecutionService} from '@app/core/api/testra/services/execution.service';
import DeleteExecutionParams = ExecutionService.DeleteExecutionParams;

@Injectable()
export class ExecutionsEffects {

  @Effect()
  loadExecutions$ = this.actions$.pipe(
    ofType(ExecutionsActionTypes.LoadExecutions),
    switchMap(() =>
      this.executionsService.getExecutions('5ba6be9ba7b11b00014d955e').pipe(
        map((executions: Array<Execution>) => ActionsFactory.newLoadExecutionsSuccessAction(executions)),
        catchError(error => of(ActionsFactory.newLoadExecutionsFailAction(error)))
      )
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
