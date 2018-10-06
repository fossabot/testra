import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromResults from './reducers/results.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ResultsEffects} from './effects/results.effects';
import {ResultService} from '@app/core/api/testra/services/result.service';
import {ResultsComponent} from '@app/results/containers/results/results.component';
import {ResultsComponentModule} from '@app/results/components/results-component.module';
import {AngularSplitModule} from 'angular-split-ng6';
import {ResultListComponent} from '@app/results/components/result-list/result-list.component';
import {ResultComponent} from '@app/results/components/result/result.component';

@NgModule({
  imports: [
    CommonModule,
    ResultsComponentModule,
    AngularSplitModule,
    StoreModule.forFeature('results', fromResults.reducer),
    EffectsModule.forFeature([ResultsEffects])
  ],
  declarations: [ResultsComponent],
  providers: [ResultService, ResultsEffects],
  exports: [ResultsComponent, ResultListComponent, ResultComponent]
})
export class ResultsModule {
}
