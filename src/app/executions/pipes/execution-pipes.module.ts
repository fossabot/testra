import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyDurationPipe} from '@app/executions/pipes/pretty-duration/pretty-duration.pipe';

const PIPES = [PrettyDurationPipe];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: PIPES,
  exports: PIPES
})
export class ExecutionPipesModule { }
