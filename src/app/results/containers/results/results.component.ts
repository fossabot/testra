import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {TestGroup} from '@app/core/api/testra/models/test-group';
import {EnrichedTestResult} from '@app/core/api/testra/models/enriched-test-result';
import {Subject} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit, OnChanges {

  @Input() group: TestGroup;
  @Input() results: EnrichedTestResult[];

  showResultsListArea = true;
  showResultArea = false;

  selectedResult: EnrichedTestResult;

  constructor() {
  }

  ngOnInit() {
  }

  selectResult(result: EnrichedTestResult) {
    this.showResultArea = true;
    this.selectedResult = result;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showResultArea = false;
  }
}
