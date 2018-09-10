import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectItemComponent} from '@app/projects/components/project-item/project-item.component';
import {ProjectListComponent} from '@app/projects/components/project-list/project-list.component';

export const COMPONENTS = [ProjectItemComponent, ProjectListComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ProjectsComponentsModule {}
