/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

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
  getTestcasesResponse(params: TestcaseService.GetTestcasesParams): Observable<HttpResponse<Array<Testcase>>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<Testcase> = null;
        _body = _resp.body as Array<Testcase>;
        return _resp.clone({body: _body}) as HttpResponse<Array<Testcase>>;
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
      map(_r => _r.body)
    );
  }

  /**
   * Adds a new testcase into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `TestcaseService.CreateTestcaseParams` containing the following parameters:
   *
   * - `projectId`: Testcase Id
   *
   * - `body`:
   *
   * @return Successful creation of Testcase
   */
  createTestcaseResponse(params: TestcaseService.CreateTestcaseParams): Observable<HttpResponse<Testcase>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Testcase = null;
        _body = _resp.body as Testcase;
        return _resp.clone({body: _body}) as HttpResponse<Testcase>;
      })
    );
  }

  /**
   * Adds a new testcase into Testra app. It takes a JSON object containing a name that was not used before.
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
      map(_r => _r.body)
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
  getTestcaseResponse(params: TestcaseService.GetTestcaseParams): Observable<HttpResponse<Testcase>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Testcase = null;
        _body = _resp.body as Testcase;
        return _resp.clone({body: _body}) as HttpResponse<Testcase>;
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
      map(_r => _r.body)
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
  updateTestcaseResponse(params: TestcaseService.UpdateTestcaseParams): Observable<HttpResponse<Testcase>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Testcase = null;
        _body = _resp.body as Testcase;
        return _resp.clone({body: _body}) as HttpResponse<Testcase>;
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
      map(_r => _r.body)
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
  deleteTestcaseResponse(params: TestcaseService.DeleteTestcaseParams): Observable<HttpResponse<Testcase>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Testcase = null;
        _body = _resp.body as Testcase;
        return _resp.clone({body: _body}) as HttpResponse<Testcase>;
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
      map(_r => _r.body)
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
