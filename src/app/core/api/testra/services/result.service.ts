/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {EnrichedTestResult} from '../models/enriched-test-result';
import {TestResult} from '../models/test-result';
import {TestResultRequest} from '../models/test-result-request';

/**
 * Everything about Test Results
 */
@Injectable({
  providedIn: 'root',
})
class ResultService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all results within given project and execution
   * @param params The `ResultService.GetResultsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * - `status`: Filter test results by the given result status
   *
   * @return Successful Response
   */
  getResultsResponse(params: ResultService.GetResultsParams): Observable<HttpResponse<Array<EnrichedTestResult>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.status != null) __params = __params.set('status', params.status.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/results`,
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
        let _body: Array<EnrichedTestResult> = null;
        _body = _resp.body as Array<EnrichedTestResult>;
        return _resp.clone({body: _body}) as HttpResponse<Array<EnrichedTestResult>>;
      })
    );
  }

  /**
   * Returns list of all results within given project and execution
   * @param params The `ResultService.GetResultsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * - `status`: Filter test results by the given result status
   *
   * @return Successful Response
   */
  getResults(params: ResultService.GetResultsParams): Observable<Array<EnrichedTestResult>> {
    return this.getResultsResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Adds a new result into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `ResultService.CreateResultParams` containing the following parameters:
   *
   * - `projectId`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Result
   */
  createResultResponse(params: ResultService.CreateResultParams): Observable<HttpResponse<TestResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/results`,
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
        let _body: TestResult = null;
        _body = _resp.body as TestResult;
        return _resp.clone({body: _body}) as HttpResponse<TestResult>;
      })
    );
  }

  /**
   * Adds a new result into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `ResultService.CreateResultParams` containing the following parameters:
   *
   * - `projectId`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Result
   */
  createResult(params: ResultService.CreateResultParams): Observable<TestResult> {
    return this.createResultResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Returns single result info for the given id
   * @param params The `ResultService.GetResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful update of given Result
   */
  getResultResponse(params: ResultService.GetResultParams): Observable<HttpResponse<TestResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/results/${params.id}`,
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
        let _body: TestResult = null;
        _body = _resp.body as TestResult;
        return _resp.clone({body: _body}) as HttpResponse<TestResult>;
      })
    );
  }

  /**
   * Returns single result info for the given id
   * @param params The `ResultService.GetResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful update of given Result
   */
  getResult(params: ResultService.GetResultParams): Observable<TestResult> {
    return this.getResultResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Updates exiting result using result id
   * @param params The `ResultService.UpdateResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful update of given Result
   */
  updateResultResponse(params: ResultService.UpdateResultParams): Observable<HttpResponse<TestResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/results/${params.id}`,
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
        let _body: TestResult = null;
        _body = _resp.body as TestResult;
        return _resp.clone({body: _body}) as HttpResponse<TestResult>;
      })
    );
  }

  /**
   * Updates exiting result using result id
   * @param params The `ResultService.UpdateResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful update of given Result
   */
  updateResult(params: ResultService.UpdateResultParams): Observable<TestResult> {
    return this.updateResultResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `ResultService.DeleteResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful deletion of given Result
   */
  deleteResultResponse(params: ResultService.DeleteResultParams): Observable<HttpResponse<TestResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/results/${params.id}`,
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
        let _body: TestResult = null;
        _body = _resp.body as TestResult;
        return _resp.clone({body: _body}) as HttpResponse<TestResult>;
      })
    );
  }

  /**
   * @param params The `ResultService.DeleteResultParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful deletion of given Result
   */
  deleteResult(params: ResultService.DeleteResultParams): Observable<TestResult> {
    return this.deleteResultResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module ResultService {

  /**
   * Parameters for getResults
   */
  export interface GetResultsParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    executionId: string;

    /**
     * Filter test results by the given result status
     */
    status?: string;
  }

  /**
   * Parameters for createResult
   */
  export interface CreateResultParams {

    /**
     * Result Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    executionId: string;
    body: TestResultRequest;
  }

  /**
   * Parameters for getResult
   */
  export interface GetResultParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Result Id
     */
    id: string;

    /**
     * Execution Id
     */
    executionId: string;
  }

  /**
   * Parameters for updateResult
   */
  export interface UpdateResultParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Result Id
     */
    id: string;

    /**
     * Execution Id
     */
    executionId: string;
    body: TestResultRequest;
  }

  /**
   * Parameters for deleteResult
   */
  export interface DeleteResultParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Result Id
     */
    id: string;

    /**
     * Execution Id
     */
    executionId: string;
  }
}

export {ResultService};
