import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoaderComponent} from './loader/loader.component';
import {NbCardModule} from '@nebular/theme';
import {HighlightModule} from 'ngx-highlightjs';
import {GherkinCardComponent} from '@app/shared/gherkin-card/gherkin-card.component';
import {PrettyDurationPipe} from '@app/shared/pipes/pretty-duration/pretty-duration.pipe';

const COMPONENTS = [LoaderComponent, GherkinCardComponent, PrettyDurationPipe];

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    HighlightModule.forRoot({theme: 'solarized-dark'})
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SharedModule {
}
