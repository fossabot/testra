import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Counter } from '@app/core/api/testra/models';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent implements OnInit {

  @Input() counters: { type: string; count: number; }[];

  constructor() {
  }

  ngOnInit() {
  }
}
