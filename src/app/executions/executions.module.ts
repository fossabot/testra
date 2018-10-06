import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromExecutions from './reducers/executions.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ExecutionsSidebarComponent} from '@app/executions/containers/executions-sidebar/executions-sidebar.component';
import {ExecutionService} from '@app/core/api/testra/services/execution.service';
import {ExecutionsEffects} from '@app/executions/effects/executions.effects';
import {ExecutionsComponentsModule} from '@app/executions/components/executions.components.module';
import {ExecutionsComponent} from './containers/executions/executions.component';
import {ExecutionsContentComponent} from './containers/executions-content/executions-content.component';
import {NbCardModule, NbSpinnerModule} from '@nebular/theme';
import {ExecutionsRoutingModule} from '@app/executions/executions-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbSpinnerModule,
    FontAwesomeModule,
    ExecutionsComponentsModule,
    ExecutionsRoutingModule,
    StoreModule.forFeature('executions', fromExecutions.reducer),
    EffectsModule.forFeature([ExecutionsEffects])
  ],
  declarations: [ExecutionsSidebarComponent, ExecutionsComponent, ExecutionsContentComponent],
  exports: [ExecutionsSidebarComponent],
  providers: [ExecutionService, ExecutionsEffects]
})
export class ExecutionsModule {
}
