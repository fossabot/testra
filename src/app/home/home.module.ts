import {ApiConfiguration} from './../core/api/testra/api-configuration';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from '@app/home/container/home.component';
import {CounterService, ExecutionService, ProjectService} from '@app/core/api/testra/services';
import {CountersModule} from '../counters/counters.module';
import {ProjectsModule} from '@app/projects/projects.module';
import {HomeComponentsModule} from './components/home-components.module';
import {ExecutionsModule} from '@app/executions/executions.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    CountersModule,
    ProjectsModule,
    HomeComponentsModule,
    ExecutionsModule
  ],
  declarations: [HomeComponent],
  providers: [CounterService, ProjectService, ExecutionService, ApiConfiguration]
})
export class HomeModule {
}
