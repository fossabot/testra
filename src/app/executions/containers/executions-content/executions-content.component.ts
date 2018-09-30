import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromExecutions from '@app/executions/reducers/executions.reducer';
import {Observable, Subject} from 'rxjs';
import {Execution} from '@app/core/api/testra/models/execution';
import {filter, takeUntil} from 'rxjs/operators';
import {ActionsFactory} from '@app/executions/actions/executions.actions.factory';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';

@Component({
  selector: 'app-executions-content',
  templateUrl: './executions-content.component.html',
  styleUrls: ['./executions-content.component.css']
})
export class ExecutionsContentComponent implements OnInit, OnDestroy {

  @Input() projectName: string;

  destroyed$ = new Subject<void>();
  currentExecution$: Observable<Execution>;
  currentExecutionStats$: Observable<TestExecutionStats>;

  constructor(private store: Store<fromExecutions.ExecutionState>) {
  }

  ngOnInit() {
    this.currentExecution$ = this.store.pipe(select(fromExecutions.getCurrentExecution));
    this.currentExecutionStats$ = this.store.pipe(select(fromExecutions.getCurrentExecutionStats));

    this.loadExecutionStats();
  }

  loadExecutionStats() {
    this.currentExecution$
      .pipe(
        takeUntil(this.destroyed$),
        filter(e => e != null)
      )
      .subscribe(e => this.store.dispatch(ActionsFactory.newLoadExecutionStatsAction(e.projectId, e.id)));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
