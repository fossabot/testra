import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-list',
  templateUrl: './execution-list.component.html',
  styleUrls: ['./execution-list.component.scss']
})
export class ExecutionListComponent implements OnInit {

  @Input() executions: Execution[];
  @Input() isLoading: boolean;
  @Input() isLoadSuccess: boolean;
  @Input() projectName: string;
  @Input() currentExecution: Execution;

  @Output() removeExecution$ = new EventEmitter<Execution>();
  @Output() selectedExecutionId$ = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.isLoadSuccess = true;
    this.isLoading = false;
  }

  removeExecution(execution: Execution) {
    this.removeExecution$.emit(execution);
  }

  selectListItem(executionId: string) {
    this.selectedExecutionId$.emit(executionId);
    window.history.replaceState({}, '', `/projects/${this.projectName}/executions/${executionId}`);
  }
}
