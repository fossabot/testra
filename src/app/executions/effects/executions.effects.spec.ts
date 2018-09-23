import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExecutionsEffects } from './executions.effects';

describe('ExecutionsEffects', () => {
  let actions$: Observable<any>;
  let effects: ExecutionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExecutionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ExecutionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
