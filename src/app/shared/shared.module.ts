import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrettyDurationPipe} from '@app/shared/pipes/pretty-duration/pretty-duration.pipe';
import {ComponentsModule} from '@app/shared/components/components.module';

const PIPES = [PrettyDurationPipe];

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [...PIPES],
  exports: [...PIPES, ComponentsModule]
})
export class SharedModule {
}
