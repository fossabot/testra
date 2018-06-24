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
import { ApiClientService } from '../core/api/testra/index';

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
    ApiClientService
  ]
})
export class HomeModule { }
