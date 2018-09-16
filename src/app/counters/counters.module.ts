import {CountersComponentsModule} from './components/counters.components.module';
import {CountersComponent} from './containers/counters.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromCounter from './reducers/counter.reducer';
import {CounterEffects} from './effects/counter.effects';
import {CounterService} from '@app/core/api/testra/services';

@NgModule({
  imports: [
    CommonModule,
    CountersComponentsModule,
    StoreModule.forFeature('counters', fromCounter.reducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  declarations: [CountersComponent],
  exports: [CountersComponent],
  providers: [CounterService, CounterEffects]
})
export class CountersModule {
}
