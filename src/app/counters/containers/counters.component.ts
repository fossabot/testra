import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Counter} from '@app/core/api/testra/models';
import {Logger} from '@app/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromCounters from '../reducers/counter.reducer';
import {ActionsFactory} from '../actions/counters.actions.factory';

const log = new Logger('CountersComponent');

interface NamedCounter {
  type: string;
  count: number;
}

const INITIAL_COUNTER: NamedCounter[] = [
  {type: 'Groups', count: 0},
  {type: 'Projects', count: 0},
  {type: 'Executions', count: 0},
  {type: 'Results', count: 0},
  {type: 'Scenarios', count: 0},
  {type: 'Testcases', count: 0},
  {type: 'Simulations', count: 0},
  {type: 'Vul. Alerts', count: 0}
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

  private namedCounterSubscription: Subscription;

  constructor(private store: Store<fromCounters.State>) {
    this.counters$ = this.store.pipe(select('counters'));
  }

  static mapCounterToList(counter: Counter): NamedCounter[] {
    return [
      {type: 'Groups', count: 0},
      {type: 'Projects', count: counter.projectsCount},
      {type: 'Executions', count: counter.testExecutionsCount},
      {type: 'Results', count: counter.testResultsCount},
      {type: 'Scenarios', count: counter.testScenariosCount},
      {type: 'Testcases', count: counter.testCasesCount},
      {type: 'Simulations', count: counter.simulationsCount},
      {type: 'Vul. Alerts', count: counter.vulnerabilityAlertsCount}
    ];
  }

  ngOnInit() {
    this.store.dispatch(ActionsFactory.newLoadCountersAction());

    this.namedCounterSubscription = this.counters$.subscribe(counterState =>
      this.subject.next(CountersComponent.mapCounterToList(counterState.counter))
    );
  }

  ngOnDestroy() {
    this.namedCounterSubscription.unsubscribe();
  }
}
