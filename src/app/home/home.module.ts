import { ApiConfiguration } from './../core/api/testra/api-configuration';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { CountersComponent } from '../counters/counters.component';
import { CounterListComponent } from '../counters/counter-list/counter-list.component';
import { CounterComponent } from '../counters/counter/counter.component';
import { CounterService, ProjectService } from '@app/core/api/testra/services';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    CountersComponent,
    CounterListComponent,
    CounterComponent
  ],
  providers: [
    QuoteService,
    CounterService,
    ProjectService,
    ApiConfiguration
  ]
})
export class HomeModule { }
