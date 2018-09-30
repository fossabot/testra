import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Route} from '@app/core';
import {ExecutionsComponent} from '@app/executions/containers/executions/executions.component';

const routes: Routes = [
  Route.withShell([
    {path: 'projects/:projectName/executions', component: ExecutionsComponent},
    {path: 'projects/:projectName/executions/:executionId', component: ExecutionsComponent}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExecutionsRoutingModule {
}
