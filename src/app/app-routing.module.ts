import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Route} from '@app/core';
import {ProjectsComponent} from '@app/projects/containers/projects/projects.component';

const routes: Routes = [
  Route.withShell([
    {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
    {path: 'projects', component: ProjectsComponent}
  ]),
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
