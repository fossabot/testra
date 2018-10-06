import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TestGroupsEffects } from './test-groups.effects';

describe('TestGroupsEffects', () => {
  let actions$: Observable<any>;
  let effects: TestGroupsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestGroupsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TestGroupsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
