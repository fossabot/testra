import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.scss']
})
export class CounterListComponent implements OnInit {
  @Input()
  counters: { type: string; count: number }[];

  constructor() {}

  ngOnInit() {}
}
