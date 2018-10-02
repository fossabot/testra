import {TestGroup} from '@app/core/api/testra/models';
import {
  LoadTestGroups,
  LoadTestGroupsFail,
  LoadTestGroupsSuccess
} from '@app/testgroups/actions/test-groups.actions';


export class ActionsFactory {

  static newLoadTestGroupsAction(projectId: string, executionId: string): LoadTestGroups {
    return new LoadTestGroups(projectId, executionId);
  }

  static newLoadTestGroupsSuccessAction(testGroup: Array<TestGroup>): LoadTestGroupsSuccess {
    return new LoadTestGroupsSuccess(testGroup);
  }

  static newLoadTestGroupsFailAction(err: any): LoadTestGroupsFail {
    return new LoadTestGroupsFail(err);
  }
}
