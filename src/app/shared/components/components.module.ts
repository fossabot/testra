import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GherkinCardComponent} from '@app/shared/components/gherkin-card/gherkin-card.component';
import {ChartComponent} from '@app/shared/components/charts/chart/chart.component';
import {PieChartComponent} from '@app/shared/components/charts/pie-chart/pie-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {HighlightModule} from 'ngx-highlightjs';
import {NbCardModule} from '@nebular/theme';
import {LoaderComponent} from '@app/shared/components/loader/loader.component';
import {DonutChartComponent} from '@app/shared/components/charts/donut-chart/donut-chart.component';
import {SimpleBadgeComponent} from '@app/shared/components/simple-badge/simple-badge.component';
import gherkin from 'highlight.js/lib/languages/gherkin';

const COMPONENTS = [
  GherkinCardComponent,
  ChartComponent,
  PieChartComponent,
  DonutChartComponent,
  LoaderComponent,
  SimpleBadgeComponent];

export function hljsLanguages() {
  return [
    {name: 'gherkin', func: gherkin},
  ];
}

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NgxEchartsModule,
    HighlightModule.forRoot({languages: hljsLanguages})
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule {
}
