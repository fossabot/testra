import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultListComponent} from '@app/results/components/result-list/result-list.component';
import {ResultItemComponent} from '@app/results/components/result-item/result-item.component';
import {ResultComponent} from '@app/results/components/result/result.component';
import {NbCardModule, NbTabsetModule} from '@nebular/theme';
import {HighlightModule} from 'ngx-highlightjs';
import {SharedModule} from '@app/shared';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const COMPONENTS = [ResultListComponent, ResultItemComponent, ResultComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NbCardModule,
    NbTabsetModule,
    HighlightModule.forRoot({theme: 'solarized-dark'}),
  ],
  declarations: [COMPONENTS],
  exports: COMPONENTS
})
export class ResultsComponentModule {
}
