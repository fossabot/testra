import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExecutionItemComponent} from '@app/executions/components/sidebar/execution-item/execution-item.component';
import {ExecutionListComponent} from '@app/executions/components/sidebar/execution-list/execution-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ExecutionContentBodyComponent} from '@app/executions/components/content/execution-content-body/execution-content-body.component';
import {NbCardModule, NbSpinnerModule, NbTabsetModule} from '@nebular/theme';
import {NgxEchartsModule} from 'ngx-echarts';
import {ExecutionAutoRefreshComponent} from '@app/executions/components/content/execution-auto-refresh/execution-auto-refresh.component';
import {ExecutionContentHeaderComponent} from '@app/executions/components/content/execution-content-header/execution-content-header.component';
import {ExecutionContentByStatusComponent} from './content/execution-content-by-status/execution-content-by-status.component';
import {AngularSplitModule} from 'angular-split-ng6';
import {TestGroupsModule} from '@app/test-groups/test-groups.module';
import {ResultsModule} from '@app/results/results.module';
import {SharedModule} from '@app/shared';
import { TestsOverviewChartsComponent } from '@app/executions/components/content/tests-overview-charts/tests-overview-charts.component';

export const COMPONENTS = [ExecutionItemComponent,
  ExecutionListComponent,
  ExecutionContentBodyComponent,
  ExecutionAutoRefreshComponent,
  ExecutionContentHeaderComponent,
  ExecutionContentByStatusComponent,
  TestsOverviewChartsComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NbCardModule,
    NbTabsetModule,
    NbSpinnerModule,
    NgxEchartsModule,
    NgbTooltipModule,
    AngularSplitModule,
    TestGroupsModule,
    ResultsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ExecutionsComponentsModule {
}
