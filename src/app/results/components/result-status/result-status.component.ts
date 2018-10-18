import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-result-status',
  templateUrl: './result-status.component.html',
  styleUrls: ['./result-status.component.scss']
})
export class ResultStatusComponent implements OnChanges {

  resultStatusColor: string;

  @Input() resultStatus: string;
  @Input() isExpectedToFail: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.resultStatus) {
      case 'PASSED':
        this.resultStatusColor = '#00d977';
        break;
      case 'FAILED':
        if (this.isExpectedToFail) {
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
}
