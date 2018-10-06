import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromProjects from './reducers/projects.reducer';
import {ProjectsEffects} from './effects/projects.effects';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {ProjectsComponent} from '@app/projects/containers/projects/projects.component';
import {ProjectsComponentsModule} from '@app/projects/components/projects.components.module';
import {NbCardModule, NbSidebarService, NbSpinnerModule} from '@nebular/theme';
import {ProjectsSidebarComponent} from './containers/projects-sidebar/projects-sidebar.component';
import {ProjectsContentComponent} from './containers/projects-content/projects-content.component';
import {ProjectsRoutingModule} from '@app/projects/projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbSpinnerModule,
    ProjectsComponentsModule,
    ProjectsRoutingModule,
    StoreModule.forFeature('projects', fromProjects.reducer),
    EffectsModule.forFeature([ProjectsEffects])
  ],
  declarations: [ProjectsComponent, ProjectsSidebarComponent, ProjectsContentComponent],
  exports: [ProjectsComponent],
  providers: [ProjectService, ProjectsEffects, NbSidebarService],
})
export class ProjectsModule {
}
