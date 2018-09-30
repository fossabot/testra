/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {Observable} from 'rxjs';
import {filter as __filter, map as __map} from 'rxjs/operators';

import {Project} from '../models/project';
import {ProjectRequest} from '../models/project-request';
import {ProjectCounter} from '../models/project-counter';
import {ProjectExecutionCounter} from '../models/project-execution-counter';

/**
 * Everything about Projects
 */
@Injectable({
  providedIn: 'root',
})
class ProjectService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns list of all projects available
   * @return Successful Response
   */
  getProjectsResponse(): Observable<StrictHttpResponse<Array<Project>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<Project>>;
      })
    );
  }

  /**
   * Returns list of all projects available
   * @return Successful Response
   */
  getProjects(): Observable<Array<Project>> {
    return this.getProjectsResponse().pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Adds a new project into Testra app. It takes a JSON object containing a key that was not used before.
   * @param body undefined
   * @return Successful creation of Project
   */
  createProjectResponse(body: ProjectRequest): Observable<StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Adds a new project into Testra app. It takes a JSON object containing a key that was not used before.
   * @param body undefined
   * @return Successful creation of Project
   */
  createProject(body: ProjectRequest): Observable<Project> {
    return this.createProjectResponse(body).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns single project info for the given id or key
   * @param id Project Id or Name
   * @return Successful update of given Project
   */
  getProjectResponse(id: string): Observable<StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Returns single project info for the given id or key
   * @param id Project Id or Name
   * @return Successful update of given Project
   */
  getProject(id: string): Observable<Project> {
    return this.getProjectResponse(id).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Updates exiting project using project id
   * @param params The `ProjectService.UpdateProjectParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return Successful update of given Project
   */
  updateProjectResponse(params: ProjectService.UpdateProjectParams): Observable<StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * Updates exiting project using project id
   * @param params The `ProjectService.UpdateProjectParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * @return Successful update of given Project
   */
  updateProject(params: ProjectService.UpdateProjectParams): Observable<Project> {
    return this.updateProjectResponse(params).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * @param id Project Id
   * @return Successful deletion of given Project
   */
  deleteProjectResponse(id: string): Observable<StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * @param id Project Id
   * @return Successful deletion of given Project
   */
  deleteProject(id: string): Observable<Project> {
    return this.deleteProjectResponse(id).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns counts of Executions, Results, Scenarios, Testcases, SImulations and Vulnerability alerts
   * @param id Project Id
   * @return Success return of counts
   */
  getProjectCountersResponse(id: string): Observable<StrictHttpResponse<ProjectCounter>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${id}/counters`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<ProjectCounter>;
      })
    );
  }

  /**
   * Returns counts of Executions, Results, Scenarios, Testcases, SImulations and Vulnerability alerts
   * @param id Project Id
   * @return Success return of counts
   */
  getProjectCounters(id: string): Observable<ProjectCounter> {
    return this.getProjectCountersResponse(id).pipe(
      __map(_r => _r.body)
    );
  }

  /**
   * Returns list of top projects sorted by no of executions
   * @param size No of projects to retrieve
   * @return Successful Response
   */
  topProjectsResponse(size: number): Observable<StrictHttpResponse<Array<ProjectExecutionCounter>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (size != null) __params = __params.set('size', size.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/top`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Array<ProjectExecutionCounter>>;
      })
    );
  }

  /**
   * Returns list of top projects sorted by no of executions
   * @param size No of projects to retrieve
   * @return Successful Response
   */
  topProjects(size: number): Observable<Array<ProjectExecutionCounter>> {
    return this.topProjectsResponse(size).pipe(
      __map(_r => _r.body)
    );
  }
}

module ProjectService {

  /**
   * Parameters for updateProject
   */
  export interface UpdateProjectParams {
    id: string;
    body: ProjectRequest;
  }
}

export {ProjectService};
