import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {extract, Route} from '@app/core';
import {HomeComponent} from '@app/home/container/home.component';

const routes: Routes = [
  Route.withShell([
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {title: extract('Home')}}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {
}
