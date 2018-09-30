import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-body',
  templateUrl: './execution-content-body.component.html',
  styleUrls: ['./execution-content-body.component.scss']
})
export class ExecutionContentBodyComponent implements OnInit {

  @Input() currentExecution: Execution;
  @Input() currentExecutionStats: TestExecutionStats;

  @Output() autoRefreshResultsEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  autoRefreshResults() {
    this.autoRefreshResultsEmitter.emit();
  }
}
