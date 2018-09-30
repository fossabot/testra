import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TestExecutionStats} from '@app/core/api/testra/models/test-execution-stats';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-execution-content-primary-chart',
  templateUrl: './execution-content-primary-chart.component.html',
  styleUrls: ['./execution-content-primary-chart.component.scss']
})
export class ExecutionContentPrimaryChartComponent implements OnChanges {

  @Input() currentExecutionStats: TestExecutionStats;

  options: any = {};

  constructor() {
  }

  static getChartOptions(legendData: string[], seriesData: any[], colors: string[]) {
    return {
      backgroundColor: '#0a4c5c',
      color: colors,
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legendData,
        textStyle: {
          color: '#fff',
        },
      },
      series: [
        {
          name: 'Test Results',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            normal: {
              textStyle: {
                color: '#fff',
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#fff',
              },
            },
          },
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    let legendData = ['Passed'];
    let seriesData = [{value: this.currentExecutionStats.passed, name: 'Passed'}];
    let colors = ['#00d977'];

    const failed = this.currentExecutionStats.failed - this.currentExecutionStats.expectedFailures;
    if (failed > 0) {
      legendData = [...legendData, 'Failed'];
      seriesData = [...seriesData, {value: failed, name: 'Failed'}];
      colors = [...colors, '#ff0040'];
    }

    if (this.currentExecutionStats.expectedFailures > 0) {
      legendData = [...legendData, 'Expected Failures'];
      seriesData = [...seriesData, {value: this.currentExecutionStats.expectedFailures, name: 'Expected Failures'}];
      colors = [...colors, '#ff386a'];
    }

    if (this.currentExecutionStats.others > 0) {
      legendData = [...legendData, 'Others'];
      seriesData = [...seriesData, {value: this.currentExecutionStats.others, name: 'Others'}];
      colors = [...colors, '#ffa100'];
    }

    this.options = ExecutionContentPrimaryChartComponent.getChartOptions(legendData, seriesData, colors);
  }
}
