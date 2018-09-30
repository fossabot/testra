import {CounterListComponent} from '@app/counters/components/counter-list/counter-list.component';
import {CounterComponent} from '@app/counters/components/counter/counter.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbCardModule} from '@nebular/theme';

export const COMPONENTS = [CounterComponent, CounterListComponent];

@NgModule({
  imports: [CommonModule, NbCardModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CountersComponentsModule {
}
