import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {LoadTestGroups, TestGroupsActionTypes} from '../actions/test-groups.actions';
import {catchError, map, share, switchMap} from 'rxjs/operators';
import {TestGroup} from '@app/core/api/testra/models/test-group';
import GetTestGroupsInExecutionParams = TestGroupService.GetTestGroupsInExecutionParams;
import {TestGroupService} from '@app/core/api/testra/services/test-group.service';
import {ActionsFactory} from '@app/test-groups/actions/test-groups.actions.factory';
import {of} from 'rxjs';

@Injectable()
export class TestGroupsEffects {

  @Effect()
  loadTestGroups$ = this.actions$.pipe(
    ofType(TestGroupsActionTypes.LoadTestGroups),
    switchMap((action: LoadTestGroups) => {
    const getTestGroupsInExecutionParams: GetTestGroupsInExecutionParams = {
      projectId: action.projectId,
      executionId: action.executionId
    };
      return this.testGroupService.getTestGroupsInExecution(getTestGroupsInExecutionParams).pipe(
        map((testGroups: Array<TestGroup>) => ActionsFactory.newLoadTestGroupsSuccessAction(testGroups)),
        catchError(error => of(ActionsFactory.newLoadTestGroupsFailAction(error)))
      );
     }
    ),
    share()
  );
  constructor(private actions$: Actions, private testGroupService: TestGroupService) {}
}
