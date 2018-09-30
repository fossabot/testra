import {HomeComponentsModule} from './home-components.module';

describe('HomeComponentsModule', () => {
  let homeComponentsModule: HomeComponentsModule;

  beforeEach(() => {
    homeComponentsModule = new HomeComponentsModule();
  });

  it('should create an instance', () => {
    expect(homeComponentsModule).toBeTruthy();
  });
});
