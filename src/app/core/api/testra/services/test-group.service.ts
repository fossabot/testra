/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {Observable} from 'rxjs';
import {filter as __filter, map as __map} from 'rxjs/operators';

import {TestGroup} from '../models/test-group';

@Injectable({
  providedIn: 'root',
})
class TestGroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all test groups (features or namespaces) within given project and execution
   * @param params The `TestGroupService.GetTestGroupsInExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful Response
   */
  getTestGroupsInExecutionResponse(params: TestGroupService.GetTestGroupsInExecutionParams): Observable<StrictHttpResponse<Array<TestGroup>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<TestGroup>>;
      })
    );
  }

  /**
   * Returns list of all test groups (features or namespaces) within given project and execution
   * @param params The `TestGroupService.GetTestGroupsInExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful Response
   */
  getTestGroupsInExecution(params: TestGroupService.GetTestGroupsInExecutionParams): Observable<Array<TestGroup>> {
    return this.getTestGroupsInExecutionResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns list of all test groups within given project
   * @param params The `TestGroupService.GetTestGroupsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `type`: Filter results by group type. Group type can be either FEATURE or NAMESPACE
   *
   * @return Successful Response
   */
  getTestGroupsResponse(params: TestGroupService.GetTestGroupsParams): Observable<StrictHttpResponse<Array<TestGroup>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.type != null) __params = __params.set('type', params.type.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/test-groups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<TestGroup>>;
      })
    );
  }

  /**
   * Returns list of all test groups within given project
   * @param params The `TestGroupService.GetTestGroupsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `type`: Filter results by group type. Group type can be either FEATURE or NAMESPACE
   *
   * @return Successful Response
   */
  getTestGroups(params: TestGroupService.GetTestGroupsParams): Observable<Array<TestGroup>> {
    return this.getTestGroupsResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module TestGroupService {

  /**
   * Parameters for getTestGroupsInExecution
   */
  export interface GetTestGroupsInExecutionParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    executionId: string;
  }

  /**
   * Parameters for getTestGroups
   */
  export interface GetTestGroupsParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Filter results by group type. Group type can be either FEATURE or NAMESPACE
     */
    type?: string;
  }
}

export {TestGroupService};
