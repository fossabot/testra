import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Route} from '@app/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

const routes: Routes = [
  Route.withShell([
  ]),
  // Fallback when no prior route is matched
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
