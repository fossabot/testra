import {Component, Input, OnInit} from '@angular/core';
import * as numeral from 'numeral';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent implements OnInit {
  @Input()
  counters: { type: string; count: number }[];

  iconBgNames: String[] = ['info', 'danger', 'primary', 'success', 'warning', 'success', 'info', 'danger'];

  constructor() {
  }

  ngOnInit() {
  }

  format(value: number): string {
    return numeral(value).format('0.[00]a');
  }
}
