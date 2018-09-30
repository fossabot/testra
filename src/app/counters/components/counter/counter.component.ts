import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  count: string;

  @Input() iconClass: string;

  constructor() {
  }

  ngOnInit() {
  }

  firstTwoChars(str: string): string {
    return str.substring(0, 2);
  }
}
