import { TestGroupsModule } from './test-groups.module';

describe('TestGroupsModule', () => {
  let TestGroupsModule: TestGroupsModule;

  beforeEach(() => {
    TestGroupsModule = new TestGroupsModule();
  });

  it('should create an instance', () => {
    expect(TestGroupsModule).toBeTruthy();
  });
});
