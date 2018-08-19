/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Project } from '../models/project';
import { ErrorResponse } from '../models/error-response';
import { ProjectRequest } from '../models/project-request';

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
  getProjectsResponse(): Observable<HttpResponse<Array<Project>>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Array<Project> = null;
        _body = _resp.body as Array<Project>;
        return _resp.clone({body: _body}) as HttpResponse<Array<Project>>;
      })
    );
  }

  /**
   * Returns list of all projects available
   * @return Successful Response
   */
  getProjects(): Observable<Array<Project>> {
    return this.getProjectsResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Adds a new project into Testra app. It takes a JSON object containing a name that was not used before.
   * @param body undefined
   * @return Successful creation of Project
   */
  createProjectResponse(body: ProjectRequest): Observable<HttpResponse<Project>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Project = null;
        _body = _resp.body as Project;
        return _resp.clone({body: _body}) as HttpResponse<Project>;
      })
    );
  }

  /**
   * Adds a new project into Testra app. It takes a JSON object containing a name that was not used before.
   * @param body undefined
   * @return Successful creation of Project
   */
  createProject(body: ProjectRequest): Observable<Project> {
    return this.createProjectResponse(body).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * Returns single project info for the given id or name
   * @param id Project Id or Name
   * @return Successful update of given Project
   */
  getProjectResponse(id: string): Observable<HttpResponse<Project>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Project = null;
        _body = _resp.body as Project;
        return _resp.clone({body: _body}) as HttpResponse<Project>;
      })
    );
  }

  /**
   * Returns single project info for the given id or name
   * @param id Project Id or Name
   * @return Successful update of given Project
   */
  getProject(id: string): Observable<Project> {
    return this.getProjectResponse(id).pipe(
      map(_r => _r.body)
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
  updateProjectResponse(params: ProjectService.UpdateProjectParams): Observable<HttpResponse<Project>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Project = null;
        _body = _resp.body as Project;
        return _resp.clone({body: _body}) as HttpResponse<Project>;
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
      map(_r => _r.body)
    );
  }

  /**
   * @param id Project Id
   * @return Successful deletion of given Project
   */
  deleteProjectResponse(id: string): Observable<HttpResponse<Project>> {
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
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Project = null;
        _body = _resp.body as Project;
        return _resp.clone({body: _body}) as HttpResponse<Project>;
      })
    );
  }

  /**
   * @param id Project Id
   * @return Successful deletion of given Project
   */
  deleteProject(id: string): Observable<Project> {
    return this.deleteProjectResponse(id).pipe(
      map(_r => _r.body)
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

export { ProjectService }
