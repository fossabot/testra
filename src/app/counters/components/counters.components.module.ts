import { CounterListComponent } from '@app/counters/components/counter-list/counter-list.component';
import { CounterComponent } from '@app/counters/components/counter/counter.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

export const COMPONENTS = [
  CounterComponent,
  CounterListComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CountersComponentsModule {}
