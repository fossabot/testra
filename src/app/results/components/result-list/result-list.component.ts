import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  constructor() {
  }

  @Input() results: EnrichedTestResult[];

  @Output() selectedResult = new EventEmitter<EnrichedTestResult>();

  currentResult: EnrichedTestResult;

  private static compressSteps(steps: string[]) {
    if (steps.length <= 3) {
      return steps;
    }

    return steps.slice(0, 1)
      .concat(['  ...'])
      .concat(steps.slice(steps.length - 1, steps.length));
  }

  ngOnInit() {
  }

  selectResult(result: EnrichedTestResult) {
    this.currentResult = result;
    this.selectedResult.emit(result);
  }

  getScenario(result: EnrichedTestResult) {
    const tags = result.scenario.tags.join(' ');
    const scenarioName = 'Scenario: ' + result.scenario.name;
    return tags + '\n' + scenarioName + '\n' + this.getStepsAsString(result);
  }

  getStepsAsString(result: EnrichedTestResult) {
    const testSteps = result.scenario.backgroundSteps.concat([...result.scenario.steps]);
    const testStepTexts = testSteps
      .sort((l, r) => l.index - r.index)
      .map(step => '  ' + step.text);

    return ResultListComponent.compressSteps(testStepTexts).join('\n');
  }

  trackByFn(index: any, result: EnrichedTestResult){
    return result.id;
  }
}
