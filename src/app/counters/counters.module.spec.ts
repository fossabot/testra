import { CountersModule } from './counters.module';

describe('CountersModule', () => {
  let countersModule: CountersModule;

  beforeEach(() => {
    countersModule = new CountersModule();
  });

  it('should create an instance', () => {
    expect(countersModule).toBeTruthy();
  });
});
