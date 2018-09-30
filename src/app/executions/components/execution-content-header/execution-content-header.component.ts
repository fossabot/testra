import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-header',
  templateUrl: './execution-content-header.component.html',
  styleUrls: ['./execution-content-header.component.scss']
})
export class ExecutionContentHeaderComponent implements OnInit {

  @Input() currentExecution: Execution;
  @Input() projectName: string;

  constructor() {
  }

  ngOnInit() {
  }
}
