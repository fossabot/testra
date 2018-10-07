import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-donut-chart',
  template: `
  <app-chart [defaultChartOptions]="defaultChartOptions" [chartOptions]="chartOptions"></app-chart>
  `,
  styleUrls: []
})
export class DonutChartComponent implements OnInit {
  defaultChartOptions = DonutChartComponent.getDefaultChartOptions();

  @Input() chartOptions;

  private static getDefaultChartOptions() {
    return {
      backgroundColor: '#0a4c5c',
      color: null,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        data: null,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'Test Results',
          type: 'pie',
          radius: ['50%', '80%'],
          data: null,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              label : {
                show : true,
                formatter : '{b}\n{d}%'
              }
            }
          },
          label: {
            normal: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        }
      ]
    };
  }

  constructor() {}

  ngOnInit() {}
}
