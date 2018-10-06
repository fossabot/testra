import { Action } from '@ngrx/store';
import {TestGroup} from '@app/core/api/testra/models/test-group';

export enum TestGroupsActionTypes {
  LoadTestGroups = '[TestGroups] Load TestGroups',
  LoadTestGroupsSuccess = '[TestGroups] Load TestGroups Success',
  LoadTestGroupsFail = '[TestGroups] Load TestGroups Fail',
}

export class LoadTestGroups implements Action {
  readonly type = TestGroupsActionTypes.LoadTestGroups;

  constructor(public projectId: string, public executionId: string) {
  }
}

export class LoadTestGroupsSuccess implements Action {
  readonly type = TestGroupsActionTypes.LoadTestGroupsSuccess;

  constructor(public payload: Array<TestGroup>) {
  }
}

export class LoadTestGroupsFail implements Action {
  readonly type = TestGroupsActionTypes.LoadTestGroupsFail;

  constructor(public payload: any) {
  }
}
export type TestGroupsActions = LoadTestGroups | LoadTestGroupsSuccess| LoadTestGroupsFail;
