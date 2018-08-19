/* tslint:disable */
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiConfiguration} from './api-configuration';

import {ProjectService} from './services/project.service';
import {ScenarioService} from './services/scenario.service';
import {TestcaseService} from './services/testcase.service';
import {ExecutionService} from './services/execution.service';
import {ResultService} from './services/result.service';
import {TestGroupService} from './services/test-group.service';
import {CounterService} from './services/counter.service';

/**
 * Module that provides instances for all API services
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ProjectService,
    ScenarioService,
    TestcaseService,
    ExecutionService,
    ResultService,
    TestGroupService,
    CounterService
  ],
})
export class ApiModule {
}
