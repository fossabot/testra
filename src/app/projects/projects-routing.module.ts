import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Route} from '@app/core';
import {ProjectsComponent} from '@app/projects/containers/projects/projects.component';

const routes: Routes = [
  Route.withShell([
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/:projectName', component: ProjectsComponent},
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProjectsRoutingModule {
}
