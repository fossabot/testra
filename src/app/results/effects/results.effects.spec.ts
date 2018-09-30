import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ResultsEffects } from './results.effects';

describe('ResultsEffects', () => {
  let actions$: Observable<any>;
  let effects: ResultsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResultsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ResultsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
