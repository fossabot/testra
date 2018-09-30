import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Execution} from '@app/core/api/testra/models/execution';
import {faClock, faStopwatch} from '@fortawesome/free-solid-svg-icons';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-header',
  templateUrl: './execution-content-header.component.html',
  styleUrls: ['./execution-content-header.component.scss']
})
export class ExecutionContentHeaderComponent implements OnInit {

  @Input() currentExecution: Execution;
  @Input() projectName: string;

  faStopWatch = faStopwatch;
  faClock = faClock;

  constructor() {
  }

  ngOnInit() {
  }
}
