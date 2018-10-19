import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectItemComponent} from '@app/projects/components/project-item/project-item.component';
import {ProjectListComponent} from '@app/projects/components/project-list/project-list.component';
import {ProjectCreateComponent} from '@app/projects/components/project-create/project-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProjectResultsOverallChartComponent} from '@app/projects/components/project-results-overall-chart/project-results-overall-chart.component';
import {ProjectSidebarHeaderComponent} from '@app/projects/components/project-sidebar-header/project-sidebar-header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbActiveModal, NgbModal, NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';
import {ProjectContentHeaderComponent} from '@app/projects/components/project-content-header/project-content-header.component';
import {NbCardModule} from '@nebular/theme';
import {ProjectCountersComponent} from '@app/projects/components/project-counters/project-counters.component';
import {RouterModule} from '@angular/router';
import {AddCommasPipe} from '@app/projects/pipes/add-commas.pipe';
import {SharedModule} from '@app/shared';

export const COMPONENTS = [ProjectItemComponent,
  ProjectListComponent,
  ProjectSidebarHeaderComponent,
  ProjectCreateComponent,
  ProjectCountersComponent,
  ProjectResultsOverallChartComponent,
  ProjectContentHeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    NbCardModule,
    RouterModule
  ],
  declarations: [...COMPONENTS, AddCommasPipe],
  exports: COMPONENTS,
  providers: [NgbModal, NgbRadioGroup, NgbActiveModal],
  entryComponents: [ProjectCreateComponent]
})
export class ProjectsComponentsModule {
}
