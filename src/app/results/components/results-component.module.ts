import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultListComponent} from '@app/results/components/result-list/result-list.component';
import {ResultComponent} from '@app/results/components/result/result.component';
import {NbCardModule, NbTabsetModule} from '@nebular/theme';
import {HighlightModule} from 'ngx-highlightjs';
import {SharedModule} from '@app/shared';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AttachmentListComponent} from './attachment-list/attachment-list.component';
import {ModalGalleryModule} from '@ks89/angular-modal-gallery';
import {ResultStatusComponent} from './result-status/result-status.component';
import {TestCaseResultComponent} from '@app/results/components/test-case-result/test-case-result.component';
import gherkin from 'highlight.js/lib/languages/gherkin';

const COMPONENTS = [
  ResultListComponent,
  ResultComponent,
  AttachmentListComponent,
  ResultStatusComponent,
  TestCaseResultComponent];

export function hljsLanguages() {
  return [
    {name: 'gherkin', func: gherkin},
  ];
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NbCardModule,
    NbTabsetModule,
    ModalGalleryModule.forRoot(),
    HighlightModule.forRoot({languages: hljsLanguages}),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ResultsComponentModule {
}
