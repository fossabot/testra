import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Counter } from '@app/core/api/testra/models';
import { Logger } from '@app/core';
import { startWith } from 'rxjs/operators';
import { BehaviorSubject, from, interval, Observable, Observer, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromCounters from '../reducers/counter.reducer';
import { LoadCounters } from '@app/counters/actions/counter.actions';
import { ActionsFactory } from '../actions/counters.actions.factory';

const log = new Logger('CountersComponent');
interface NamedCounter {
  type: string;
  count: number;
}

const INITIAL_COUNTER: NamedCounter[] = [
  { type: 'Projects', count: 0 },
  { type: 'Scenarios', count: 0 },
  { type: 'Testcases', count: 0 },
  { type: 'Executions', count: 0 },
  { type: 'Results', count: 0 }
];

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountersComponent implements OnInit, OnDestroy {
  private counters$: Observable<fromCounters.State>;

  private subject = new BehaviorSubject<NamedCounter[]>(INITIAL_COUNTER);
  namedCounters: Observable<NamedCounter[]> = this.subject.asObservable();

  private pollSubscription: Subscription;
  private namedCounterSubscription: Subscription;

  static mapCounterToList(counter: Counter): NamedCounter[] {
    return [
      { type: 'Projects', count: counter.projectsCount },
      { type: 'Scenarios', count: counter.testScenariosCount },
      { type: 'Testcases', count: counter.testCasesCount },
      { type: 'Executions', count: counter.testExecutionsCount },
      { type: 'Results', count: counter.testResultsCount }
    ];
  }

  constructor(private store: Store<fromCounters.State>) {
    this.counters$ = this.store.pipe(select('counters'));
  }

  ngOnInit() {
    this.pollSubscription = interval(30000)
      .pipe(startWith(0))
      .subscribe(() => this.store.dispatch(ActionsFactory.newLoadCountersAction()));

    this.namedCounterSubscription =
      this.counters$.subscribe(counterState =>
        this.subject.next(CountersComponent.mapCounterToList(counterState.counter)));
  }

  ngOnDestroy() {
    this.pollSubscription.unsubscribe();
    this.namedCounterSubscription.unsubscribe();
  }
}
