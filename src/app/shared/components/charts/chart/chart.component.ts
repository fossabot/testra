import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chart',
  template: `
  <div *ngIf="chartOptions" echarts [options]="defaultChartOptions" [merge]="chartOptions" class="echart"></div>
  `,
  styleUrls: []
})
export class ChartComponent implements OnInit {

  @Input() defaultChartOptions;
  @Input() chartOptions;

  constructor() { }

  ngOnInit() {
  }
}
