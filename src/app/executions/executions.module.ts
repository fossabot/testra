import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromExecutions from './reducers/executions.reducer';
import { EffectsModule } from '@ngrx/effects';
import {ExecutionsComponent} from '@app/executions/containers/executions/executions.component';
import {ExecutionService} from '@app/core/api/testra/services/execution.service';
import {ExecutionsEffects} from '@app/executions/effects/executions.effects';
import {ExecutionsComponentsModule} from '@app/executions/components/executions.components.module';


@NgModule({
  imports: [
    CommonModule,
    ExecutionsComponentsModule,
    StoreModule.forFeature('executions', fromExecutions.reducer),
    EffectsModule.forFeature([ExecutionsEffects])
  ],
  declarations: [ ExecutionsComponent ],
  exports: [ ExecutionsComponent ],
  providers: [ExecutionService, ExecutionsEffects]
})
export class ExecutionsModule { }
