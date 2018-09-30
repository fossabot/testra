import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResultListComponent} from '@app/results/components/result-list/result-list.component';
import {ResultItemComponent} from '@app/results/components/result-item/result-item.component';

const COMPONENTS = [ResultListComponent, ResultItemComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ResultsComponentModule {
}
