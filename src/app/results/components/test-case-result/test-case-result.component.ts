import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EnrichedTestResult} from '../../../core/api/testra/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-case-result',
  templateUrl: './test-case-result.component.html',
  styleUrls: ['./test-case-result.component.scss']
})
export class TestCaseResultComponent {

  @Input() result: EnrichedTestResult;
  @Input() isActive: boolean;

  constructor() {
  }
}
