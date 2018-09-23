import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExecutionItemComponent} from '@app/executions/components/execution-item/execution-item.component';
import {ExecutionListComponent} from '@app/executions/components/execution-list/execution-list.component';
import {ReactiveFormsModule} from '@angular/forms';

export const COMPONENTS = [ExecutionItemComponent, ExecutionListComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ExecutionsComponentsModule {}
