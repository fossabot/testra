import { ExecutionsModule } from './executions.module';

describe('ExecutionsModule', () => {
  let executionsModule: ExecutionsModule;

  beforeEach(() => {
    executionsModule = new ExecutionsModule();
  });

  it('should create an instance', () => {
    expect(executionsModule).toBeTruthy();
  });
});
