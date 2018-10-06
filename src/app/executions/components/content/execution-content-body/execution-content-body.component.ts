import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';
import {NbTabComponent} from '@nebular/theme/components/tabset/tabset.component';
import {Store} from '@ngrx/store';
import * as fromResults from '@app/results/reducers/results.reducer';
import {ActionsFactory} from '@app/results/actions/results.actions.factory';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-body',
  templateUrl: './execution-content-body.component.html',
  styleUrls: ['./execution-content-body.component.scss']
})
export class ExecutionContentBodyComponent {

  @Input() currentExecution: Execution;
  @Input() currentExecutionStats: TestExecutionStats;

  @Output() showSidebarEmitter = new EventEmitter<boolean>();
  @Output() showContentHeaderEmitter = new EventEmitter<boolean>();

  currentTab = 'Overview';

  constructor(private resultsStore: Store<fromResults.ResultState>) {
  }

  getTotalResultsCount() {
    return this.currentExecutionStats.passed + this.currentExecutionStats.failed + this.currentExecutionStats.others;
  }

  changeTab(e: NbTabComponent) {
    this.showSidebarEmitter.emit(e.tabTitle === 'Overview');
    this.showContentHeaderEmitter.emit(e.tabTitle === 'Overview');
    this.currentTab = e.tabTitle;
    this.resultsStore.dispatch(ActionsFactory.newEmptyResultsAction());
  }
}
