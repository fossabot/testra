import {Component, EventEmitter, ChangeDetectionStrategy, Input, OnInit, Output} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-list',
  templateUrl: './execution-list.component.html',
  styleUrls: ['./execution-list.component.css']
})
export class ExecutionListComponent implements OnInit {

  @Input() executions: Execution[];
  @Input() isLoading: boolean;
  @Input() isLoadSuccess: boolean;

  @Output() onRemoveExecution = new EventEmitter<Execution>();

  constructor() { }

  ngOnInit() {
  }

  removeExecution(execution: Execution) {
    this.onRemoveExecution.emit(execution);
  }

}
