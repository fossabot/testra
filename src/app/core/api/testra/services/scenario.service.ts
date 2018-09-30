/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {Observable} from 'rxjs';
import {filter as __filter, map as __map} from 'rxjs/operators';

import {Scenario} from '../models/scenario';
import {ScenarioRequest} from '../models/scenario-request';

/**
 * Everything about Test Scenarios
 */
@Injectable({
  providedIn: 'root',
})
class ScenarioService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all scenarios within given project
   * @param params The `ScenarioService.GetScenariosParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `featureId`: Feature Id
   *
   * @return Successful Response
   */
  getScenariosResponse(params: ScenarioService.GetScenariosParams): Observable<StrictHttpResponse<Array<Scenario>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.featureId != null) __params = __params.set('featureId', params.featureId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/scenarios`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<Scenario>>;
      })
    );
  }

  /**
   * Returns list of all scenarios within given project
   * @param params The `ScenarioService.GetScenariosParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `featureId`: Feature Id
   *
   * @return Successful Response
   */
  getScenarios(params: ScenarioService.GetScenariosParams): Observable<Array<Scenario>> {
    return this.getScenariosResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Adds a new scenario into Testra app. It takes a JSON object containing a key that was not used before.
   * @param params The `ScenarioService.CreateScenarioParams` containing the following parameters:
   *
   * - `projectId`: Scenario Id
   *
   * - `body`:
   *
   * @return Successful creation of Scenario
   */
  createScenarioResponse(params: ScenarioService.CreateScenarioParams): Observable<StrictHttpResponse<Scenario>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/scenarios`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Scenario>;
      })
    );
  }

  /**
   * Adds a new scenario into Testra app. It takes a JSON object containing a key that was not used before.
   * @param params The `ScenarioService.CreateScenarioParams` containing the following parameters:
   *
   * - `projectId`: Scenario Id
   *
   * - `body`:
   *
   * @return Successful creation of Scenario
   */
  createScenario(params: ScenarioService.CreateScenarioParams): Observable<Scenario> {
    return this.createScenarioResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns single scenario info for the given id
   * @param params The `ScenarioService.GetScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * @return Scenario Info
   */
  getScenarioResponse(params: ScenarioService.GetScenarioParams): Observable<StrictHttpResponse<Scenario>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/scenarios/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Scenario>;
      })
    );
  }

  /**
   * Returns single scenario info for the given id
   * @param params The `ScenarioService.GetScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * @return Scenario Info
   */
  getScenario(params: ScenarioService.GetScenarioParams): Observable<Scenario> {
    return this.getScenarioResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates exiting scenario using scenario id
   * @param params The `ScenarioService.UpdateScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * - `body`:
   *
   * @return Successful update of given Scenario
   */
  updateScenarioResponse(params: ScenarioService.UpdateScenarioParams): Observable<StrictHttpResponse<Scenario>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/scenarios/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Scenario>;
      })
    );
  }

  /**
   * Updates exiting scenario using scenario id
   * @param params The `ScenarioService.UpdateScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * - `body`:
   *
   * @return Successful update of given Scenario
   */
  updateScenario(params: ScenarioService.UpdateScenarioParams): Observable<Scenario> {
    return this.updateScenarioResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param params The `ScenarioService.DeleteScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * @return Successful deletion of given Scenario
   */
  deleteScenarioResponse(params: ScenarioService.DeleteScenarioParams): Observable<StrictHttpResponse<Scenario>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/scenarios/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Scenario>;
      })
    );
  }

  /**
   * @param params The `ScenarioService.DeleteScenarioParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Scenario Id
   *
   * @return Successful deletion of given Scenario
   */
  deleteScenario(params: ScenarioService.DeleteScenarioParams): Observable<Scenario> {
    return this.deleteScenarioResponse(params).pipe(
      __map(_r => _r.body)
    );
  }
}

module ScenarioService {

  /**
   * Parameters for getScenarios
   */
  export interface GetScenariosParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Feature Id
     */
    featureId?: string;
  }

  /**
   * Parameters for createScenario
   */
  export interface CreateScenarioParams {

    /**
     * Scenario Id
     */
    projectId: string;
    body: ScenarioRequest;
  }

  /**
   * Parameters for getScenario
   */
  export interface GetScenarioParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Scenario Id
     */
    id: string;
  }

  /**
   * Parameters for updateScenario
   */
  export interface UpdateScenarioParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Scenario Id
     */
    id: string;
    body: ScenarioRequest;
  }

  /**
   * Parameters for deleteScenario
   */
  export interface DeleteScenarioParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Scenario Id
     */
    id: string;
  }
}

export {ScenarioService};
