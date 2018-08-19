/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Execution } from '../models/execution';
import { ErrorResponse } from '../models/error-response';
import { ExecutionRequest } from '../models/execution-request';
import { TestExecutionStats } from '../models/test-execution-stats';

/**
 * Everything about Executions
 */
@Injectable({
  providedIn: 'root',
})
class ExecutionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all executions within given project
   * @param projectId Project Id
   * @return Successful Response
   */
  getExecutionsResponse(projectId: string): Observable<HttpResponse<Array<Execution>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<Execution> = null;
        _body = _resp.body as Array<Execution>;
        return _resp.clone({body: _body}) as HttpResponse<Array<Execution>>;
      })
    );
  }

  /**
   * Returns list of all executions within given project
   * @param projectId Project Id
   * @return Successful Response
   */
  getExecutions(projectId: string): Observable<Array<Execution>> {
    return this.getExecutionsResponse(projectId).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Adds a new execution into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `ExecutionService.CreateExecutionParams` containing the following parameters:
   *
   * - `projectId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Execution
   */
  createExecutionResponse(params: ExecutionService.CreateExecutionParams): Observable<HttpResponse<Execution>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Execution = null;
        _body = _resp.body as Execution;
        return _resp.clone({body: _body}) as HttpResponse<Execution>;
      })
    );
  }

  /**
   * Adds a new execution into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `ExecutionService.CreateExecutionParams` containing the following parameters:
   *
   * - `projectId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Execution
   */
  createExecution(params: ExecutionService.CreateExecutionParams): Observable<Execution> {
    return this.createExecutionResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Returns single execution info for the given id
   * @param params The `ExecutionService.GetExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful response of given Execution
   */
  getExecutionResponse(params: ExecutionService.GetExecutionParams): Observable<HttpResponse<Execution>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Execution = null;
        _body = _resp.body as Execution;
        return _resp.clone({body: _body}) as HttpResponse<Execution>;
      })
    );
  }

  /**
   * Returns single execution info for the given id
   * @param params The `ExecutionService.GetExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful response of given Execution
   */
  getExecution(params: ExecutionService.GetExecutionParams): Observable<Execution> {
    return this.getExecutionResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Updates exiting execution using execution id
   * @param params The `ExecutionService.UpdateExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * - `body`:
   *
   * @return Successful update of given Execution
   */
  updateExecutionResponse(params: ExecutionService.UpdateExecutionParams): Observable<HttpResponse<Execution>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Execution = null;
        _body = _resp.body as Execution;
        return _resp.clone({body: _body}) as HttpResponse<Execution>;
      })
    );
  }

  /**
   * Updates exiting execution using execution id
   * @param params The `ExecutionService.UpdateExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * - `body`:
   *
   * @return Successful update of given Execution
   */
  updateExecution(params: ExecutionService.UpdateExecutionParams): Observable<Execution> {
    return this.updateExecutionResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ExecutionService.DeleteExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful deletion of given Execution
   */
  deleteExecutionResponse(params: ExecutionService.DeleteExecutionParams): Observable<HttpResponse<Execution>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Execution = null;
        _body = _resp.body as Execution;
        return _resp.clone({body: _body}) as HttpResponse<Execution>;
      })
    );
  }

  /**
   * @param params The `ExecutionService.DeleteExecutionParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful deletion of given Execution
   */
  deleteExecution(params: ExecutionService.DeleteExecutionParams): Observable<Execution> {
    return this.deleteExecutionResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Returns passed, failed and other results count
   * @param params The `ExecutionService.GetExecutionResultStatsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful response of given Execution
   */
  getExecutionResultStatsResponse(params: ExecutionService.GetExecutionResultStatsParams): Observable<HttpResponse<TestExecutionStats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.id}/result-stats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: TestExecutionStats = null;
        _body = _resp.body as TestExecutionStats;
        return _resp.clone({body: _body}) as HttpResponse<TestExecutionStats>;
      })
    );
  }

  /**
   * Returns passed, failed and other results count
   * @param params The `ExecutionService.GetExecutionResultStatsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Execution Id
   *
   * @return Successful response of given Execution
   */
  getExecutionResultStats(params: ExecutionService.GetExecutionResultStatsParams): Observable<TestExecutionStats> {
    return this.getExecutionResultStatsResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module ExecutionService {

  /**
   * Parameters for createExecution
   */
  export interface CreateExecutionParams {

    /**
     * Execution Id
     */
    projectId: string;
    body: ExecutionRequest;
  }

  /**
   * Parameters for getExecution
   */
  export interface GetExecutionParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    id: string;
  }

  /**
   * Parameters for updateExecution
   */
  export interface UpdateExecutionParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    id: string;
    body: ExecutionRequest;
  }

  /**
   * Parameters for deleteExecution
   */
  export interface DeleteExecutionParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    id: string;
  }

  /**
   * Parameters for getExecutionResultStats
   */
  export interface GetExecutionResultStatsParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    id: string;
  }
}

export { ExecutionService }
