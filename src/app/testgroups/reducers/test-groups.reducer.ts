import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TestGroupsActions, TestGroupsActionTypes} from '../actions/test-groups.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {TestGroup} from '@app/core/api/testra/models/test-group';

export interface TestGroupState extends EntityState<TestGroup> {
}

/*export function sortByGroupId(a: TestGroup, b: TestGroup): number {
  return b.id - a.id;
}*/

export const adapter: EntityAdapter<TestGroup> = createEntityAdapter<TestGroup>({});

export const initialState: TestGroupState = adapter.getInitialState();

export const {
  selectIds: selectTestGroupIds,
  selectEntities: selectTestGroupEntities,
  selectAll: selectAllTestGroups,
  selectTotal: testGroupsCount
} = adapter.getSelectors();


export function reducer(state = initialState, action: TestGroupsActions): TestGroupState {
  switch (action.type) {
    case TestGroupsActionTypes.LoadTestGroups:
      return state;
    case TestGroupsActionTypes.LoadTestGroupsSuccess:
      return adapter.addAll(action.payload, state);
    case TestGroupsActionTypes.LoadTestGroupsFail:
      return state;
    default:
      return state;

  }
}

export const getTestGroupState = createFeatureSelector<TestGroupState>('testGroups');

export const allTestGroups = createSelector(getTestGroupState, selectAllTestGroups);
