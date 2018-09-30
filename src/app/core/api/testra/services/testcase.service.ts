/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {Observable} from 'rxjs';
import {filter as __filter, map as __map} from 'rxjs/operators';

import {Testcase} from '../models/testcase';
import {TestcaseRequest} from '../models/testcase-request';

/**
 * Everything about Test Cases
 */
@Injectable({
  providedIn: 'root',
})
class TestcaseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all testcases within given project
   * @param params The `TestcaseService.GetTestcasesParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `namespaceId`: Namespace Id
   *
   * @return Successful Response
   */
  getTestcasesResponse(params: TestcaseService.GetTestcasesParams): Observable<StrictHttpResponse<Array<Testcase>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.namespaceId != null) __params = __params.set('namespaceId', params.namespaceId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/testcases`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<Testcase>>;
      })
    );
  }

  /**
   * Returns list of all testcases within given project
   * @param params The `TestcaseService.GetTestcasesParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `namespaceId`: Namespace Id
   *
   * @return Successful Response
   */
  getTestcases(params: TestcaseService.GetTestcasesParams): Observable<Array<Testcase>> {
    return this.getTestcasesResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Adds a new testcase into Testra app. It takes a JSON object containing a key that was not used before.
   * @param params The `TestcaseService.CreateTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Testcase Id
   *
   * - `body`:
   *
   * @return Successful creation of Testcase
   */
  createTestcaseResponse(params: TestcaseService.CreateTestcaseParams): Observable<StrictHttpResponse<Testcase>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/testcases`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Testcase>;
      })
    );
  }

  /**
   * Adds a new testcase into Testra app. It takes a JSON object containing a key that was not used before.
   * @param params The `TestcaseService.CreateTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Testcase Id
   *
   * - `body`:
   *
   * @return Successful creation of Testcase
   */
  createTestcase(params: TestcaseService.CreateTestcaseParams): Observable<Testcase> {
    return this.createTestcaseResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns single testcase info for the given id
   * @param params The `TestcaseService.GetTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * @return Successful response
   */
  getTestcaseResponse(params: TestcaseService.GetTestcaseParams): Observable<StrictHttpResponse<Testcase>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/testcases/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Testcase>;
      })
    );
  }

  /**
   * Returns single testcase info for the given id
   * @param params The `TestcaseService.GetTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * @return Successful response
   */
  getTestcase(params: TestcaseService.GetTestcaseParams): Observable<Testcase> {
    return this.getTestcaseResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates exiting testcase using testcase id
   * @param params The `TestcaseService.UpdateTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * - `body`:
   *
   * @return Successful update of given Testcase
   */
  updateTestcaseResponse(params: TestcaseService.UpdateTestcaseParams): Observable<StrictHttpResponse<Testcase>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/testcases/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Testcase>;
      })
    );
  }

  /**
   * Updates exiting testcase using testcase id
   * @param params The `TestcaseService.UpdateTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * - `body`:
   *
   * @return Successful update of given Testcase
   */
  updateTestcase(params: TestcaseService.UpdateTestcaseParams): Observable<Testcase> {
    return this.updateTestcaseResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param params The `TestcaseService.DeleteTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * @return Successful deletion of given Testcase
   */
  deleteTestcaseResponse(params: TestcaseService.DeleteTestcaseParams): Observable<StrictHttpResponse<Testcase>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/testcases/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Testcase>;
      })
    );
  }

  /**
   * @param params The `TestcaseService.DeleteTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Testcase Id
   *
   * @return Successful deletion of given Testcase
   */
  deleteTestcase(params: TestcaseService.DeleteTestcaseParams): Observable<Testcase> {
    return this.deleteTestcaseResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module TestcaseService {

  /**
   * Parameters for getTestcases
   */
  export interface GetTestcasesParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Namespace Id
     */
    namespaceId?: string;
  }

  /**
   * Parameters for createTestcase
   */
  export interface CreateTestcaseParams {

    /**
     * Testcase Id
     */
    projectId: string;
    body: TestcaseRequest;
  }

  /**
   * Parameters for getTestcase
   */
  export interface GetTestcaseParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Testcase Id
     */
    id: string;
  }

  /**
   * Parameters for updateTestcase
   */
  export interface UpdateTestcaseParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Testcase Id
     */
    id: string;
    body: TestcaseRequest;
  }

  /**
   * Parameters for deleteTestcase
   */
  export interface DeleteTestcaseParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Testcase Id
     */
    id: string;
  }
}

export {TestcaseService};
