import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExecutionItemComponent} from '@app/executions/components/sidebar/execution-item/execution-item.component';
import {ExecutionListComponent} from '@app/executions/components/sidebar/execution-list/execution-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ExecutionContentBodyComponent} from '@app/executions/components/content/execution-content-body/execution-content-body.component';
import {NbCardModule, NbTabsetModule} from '@nebular/theme';
import {ExecutionContentPrimaryChartComponent} from '@app/executions/components/content/execution-content-primary-chart/execution-content-primary-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {ExecutionAutoRefreshComponent} from '@app/executions/components/content/execution-auto-refresh/execution-auto-refresh.component';
import {ExecutionContentHeaderComponent} from '@app/executions/components/content/execution-content-header/execution-content-header.component';
import {ExecutionPipesModule} from '@app/executions/pipes/execution-pipes.module';
import { ExecutionContentByStatusComponent } from './content/execution-content-by-status/execution-content-by-status.component';
import {AngularSplitModule} from 'angular-split-ng6';

export const COMPONENTS = [ExecutionItemComponent,
  ExecutionListComponent,
  ExecutionContentBodyComponent,
  ExecutionContentPrimaryChartComponent,
  ExecutionAutoRefreshComponent,
  ExecutionContentHeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NbCardModule,
    NbTabsetModule,
    NgxEchartsModule,
    NgbTooltipModule,
    AngularSplitModule,
    ExecutionPipesModule
  ],
  declarations: [COMPONENTS, ExecutionContentByStatusComponent],
  exports: COMPONENTS
})
export class ExecutionsComponentsModule {
}
