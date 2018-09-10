import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as fromProjects from './reducers/projects.reducer';
import {ProjectsEffects} from './effects/projects.effects';
import {ProjectService} from '@app/core/api/testra/services/project.service';
import {ProjectsComponent} from '@app/projects/containers/projects/projects.component';
import {ProjectsComponentsModule} from '@app/projects/components/projects.components.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsComponentsModule,
    StoreModule.forFeature('projects', fromProjects.reducer),
    EffectsModule.forFeature([ProjectsEffects])
  ],
  declarations: [ ProjectsComponent ],
  exports: [ ProjectsComponent ],
  providers: [ProjectService, ProjectsEffects]
})
export class ProjectsModule {
}
