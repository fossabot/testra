import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TestExecutionStats} from '@app/core/api/testra/models';

@Component({
  selector: 'app-tests-overview-charts',
  templateUrl: './tests-overview-charts.component.html',
  styleUrls: []
})
export class TestsOverviewChartsComponent implements OnChanges {
  @Input()
  currentExecutionStats: TestExecutionStats;

  primaryChartOptions = {};
  automatedManualChartOptions = {};

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updatePrimaryOptions();
    this.updateAutomatedManualOptions();
  }

  private updatePrimaryOptions() {
    let legendData = [];
    let seriesData = [];
    let colors = [];

    if (this.currentExecutionStats.passed > 0) {
      legendData = [...legendData, 'Passed'];
      seriesData = [...seriesData, {value: this.currentExecutionStats.passed, name: 'Passed'}];
      colors = [...colors, '#00d977'];
    }

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

    this.primaryChartOptions = {color: colors, legend: {data: legendData}, series: [{data: seriesData}]};
  }

  private updateAutomatedManualOptions() {
    let legendData = [];
    let seriesData = [];
    let colors = [];

    const totalTests =
      this.currentExecutionStats.passed + this.currentExecutionStats.failed + this.currentExecutionStats.others;

    const automated = totalTests - this.currentExecutionStats.manual;

    if (automated > 0) {
      legendData = [...legendData, 'Automated'];
      seriesData = [...seriesData, {value: automated, name: 'Automated'}];
      colors = [...colors, '#33ccff'];
    }

    if (this.currentExecutionStats.manual > 0) {
      legendData = [...legendData, 'Manual'];
      seriesData = [...seriesData, {value: this.currentExecutionStats.manual, name: 'Manual'}];
      colors = [...colors, '#ff6633'];
    }

    this.automatedManualChartOptions = {color: colors, legend: {data: legendData}, series: [{data: seriesData}]};
  }
}
