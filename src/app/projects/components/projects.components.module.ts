import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectItemComponent} from '@app/projects/components/project-item/project-item.component';
import {ProjectListComponent} from '@app/projects/components/project-list/project-list.component';
import {ProjectCreateComponent} from '@app/projects/components/project-create/project-create.component';
import {ReactiveFormsModule} from '@angular/forms';

export const COMPONENTS = [ProjectItemComponent, ProjectListComponent, ProjectCreateComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ProjectsComponentsModule {
}
