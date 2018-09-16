/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Simulation} from '../models/simulation';
import {SimulationRequest} from '../models/simulation-request';

/**
 * Everything about Simulations
 */
@Injectable({
  providedIn: 'root',
})
class SimulationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all simulations within given onCreateProject and execution
   * @param params The `SimulationService.GetSimulationsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful Response
   */
  getSimulationsResponse(params: SimulationService.GetSimulationsParams): Observable<HttpResponse<Array<Simulation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/simulations`,
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
        let _body: Array<Simulation> = null;
        _body = _resp.body as Array<Simulation>;
        return _resp.clone({body: _body}) as HttpResponse<Array<Simulation>>;
      })
    );
  }

  /**
   * Returns list of all simulations within given onCreateProject and execution
   * @param params The `SimulationService.GetSimulationsParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful Response
   */
  getSimulations(params: SimulationService.GetSimulationsParams): Observable<Array<Simulation>> {
    return this.getSimulationsResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Adds a new simulation into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `SimulationService.CreateSimulationParams` containing the following parameters:
   *
   * - `projectId`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Simulation
   */
  createSimulationResponse(params: SimulationService.CreateSimulationParams): Observable<HttpResponse<Simulation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/simulations`,
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
        let _body: Simulation = null;
        _body = _resp.body as Simulation;
        return _resp.clone({body: _body}) as HttpResponse<Simulation>;
      })
    );
  }

  /**
   * Adds a new simulation into Testra app. It takes a JSON object containing a name that was not used before.
   * @param params The `SimulationService.CreateSimulationParams` containing the following parameters:
   *
   * - `projectId`: Result Id
   *
   * - `executionId`: Execution Id
   *
   * - `body`:
   *
   * @return Successful creation of Simulation
   */
  createSimulation(params: SimulationService.CreateSimulationParams): Observable<Simulation> {
    return this.createSimulationResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `SimulationService.DeleteSimulationParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Simulation Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful deletion of given simulation
   */
  deleteSimulationResponse(params: SimulationService.DeleteSimulationParams): Observable<HttpResponse<Simulation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/executions/${params.executionId}/simulation/${params.id}`,
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
        let _body: Simulation = null;
        _body = _resp.body as Simulation;
        return _resp.clone({body: _body}) as HttpResponse<Simulation>;
      })
    );
  }

  /**
   * @param params The `SimulationService.DeleteSimulationParams` containing the following parameters:
   *
   * - `projectId`: Project Id
   *
   * - `id`: Simulation Id
   *
   * - `executionId`: Execution Id
   *
   * @return Successful deletion of given simulation
   */
  deleteSimulation(params: SimulationService.DeleteSimulationParams): Observable<Simulation> {
    return this.deleteSimulationResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

module SimulationService {

  /**
   * Parameters for getSimulations
   */
  export interface GetSimulationsParams {

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
   * Parameters for createSimulation
   */
  export interface CreateSimulationParams {

    /**
     * Result Id
     */
    projectId: string;

    /**
     * Execution Id
     */
    executionId: string;
    body: SimulationRequest;
  }

  /**
   * Parameters for deleteSimulation
   */
  export interface DeleteSimulationParams {

    /**
     * Project Id
     */
    projectId: string;

    /**
     * Simulation Id
     */
    id: string;

    /**
     * Execution Id
     */
    executionId: string;
  }
}

export {SimulationService};
