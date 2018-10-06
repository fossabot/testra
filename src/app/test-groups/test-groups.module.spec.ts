import { TestGroupsModule } from './test-groups.module';

describe('TestGroupsModule', () => {
  let testGroupsModule: TestGroupsModule;

  beforeEach(() => {
    testGroupsModule = new TestGroupsModule();
  });

  it('should create an instance', () => {
    expect(testGroupsModule).toBeTruthy();
  });
});
