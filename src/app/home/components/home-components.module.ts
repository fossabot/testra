import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbCardModule} from '@nebular/theme';
import {RecentExecutionsListComponent} from './recent-executions-list/recent-executions-list.component';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TopProjectsListComponent} from '@app/home/components/top-projects-list/top-projects-list.component';

const COMPONENTS = [RecentExecutionsListComponent, TopProjectsListComponent];

@NgModule({
  imports: [CommonModule, NbCardModule, RouterModule, FontAwesomeModule],
  declarations: [COMPONENTS],
  exports: COMPONENTS
})
export class HomeComponentsModule {
}
