import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';
import {faClock, faRedoAlt, faStopwatch} from '@fortawesome/free-solid-svg-icons';
import {TestStep} from '@app/core/api/testra/models/test-step';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() result: EnrichedTestResult;

  faStopWatch = faStopwatch;
  faClock = faClock;
  faRetry = faRedoAlt;

  resultStatusColor: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.result.status) {
      case 'PASSED':
        this.resultStatusColor = '#00d977';
        break;
      case 'FAILED':
        if (this.result.expectedToFail) {
          this.resultStatusColor = '#ff386a';
        } else {
          this.resultStatusColor = '#ff0040';
        }
        break;
      case 'SKIPPED':
        this.resultStatusColor = '#0088ff';
        break;
      default:
        this.resultStatusColor = '#ffa100';
    }
  }

  getStepsAsString() {
    const testSteps = this.result.scenario.backgroundSteps.concat([...this.result.scenario.steps]);

    function getDataTableAsString(step: TestStep) {
      return step.dataTableRows.sort((r1, r2) => r1.index - r2.index)
        .map(row => {
          return '\n | ' + row.cells.sort((c1, c2) => c1.index - c2.index)
            .map(cell => cell.value)
            .join(' | ') + ' |';
        });
    }

    return testSteps
      .sort((l, r) => l.index - r.index)
      .map(step => step.text + getDataTableAsString(step))
      .join('\n');
  }
}
