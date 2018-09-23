import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {extract, Route} from '@app/core';
import {HomeComponent} from './home.component';
import {ProjectsComponent} from '@app/projects/containers/projects/projects.component';
import {ExecutionsComponent} from '@app/executions/containers/executions/executions.component';

const routes: Routes = [
  Route.withShell([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {title: extract('Home')}},
    {path: 'project', component: ProjectsComponent, data: {title: extract('Project')}},
    {path: 'execution', component: ExecutionsComponent, data: {title: extract('Execution')}}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
