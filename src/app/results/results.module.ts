import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromResults from './reducers/results.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ResultsEffects} from './effects/results.effects';
import {ResultService} from '@app/core/api/testra/services/result.service';
import {ResultsComponent} from '@app/results/containers/results/results.component';
import {ResultsComponentModule} from '@app/results/components/results-component.module';

@NgModule({
  imports: [
    CommonModule,
    ResultsComponentModule,
    StoreModule.forFeature('results', fromResults.reducer),
    EffectsModule.forFeature([ResultsEffects])
  ],
  declarations: [ResultsComponent],
  providers: [ResultService, ResultsEffects]
})
export class ResultsModule {
}
