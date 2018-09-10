import {ApiConfiguration} from './../core/api/testra/api-configuration';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {QuoteService} from './quote.service';
import {CounterService, ProjectService} from '@app/core/api/testra/services';
import {CountersModule} from '../counters/counters.module';
import {ProjectsModule} from '@app/projects/projects.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    CountersModule,
    ProjectsModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    QuoteService,
    CounterService,
    ProjectService,
    ApiConfiguration
  ]
})
export class HomeModule {
}
