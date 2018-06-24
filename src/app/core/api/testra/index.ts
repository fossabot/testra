import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  Project,
  ProjectRequest,
  Scenario,
  ScenarioRequest,
  TestStep,
  Testcase,
  TestcaseRequest,
  Execution,
  ExecutionRequest,
  TestResult,
  ResultType,
  TestResultRequest,
  Result,
  StepResult,
  Attachment,
  Counter,
  ErrorResponse
} from './models';

/**
* Created with angular4-swagger-client-generator.
*/
@Injectable()
export class ApiClientService {

  private domain = '';

  constructor(private http: HttpClient, @Optional() @Inject('domain') domain: string ) {
    if (domain) {
      this.domain = domain;
    }
  }

  /**
  * Returns list of all projects available
  * Method getProjects
  * @return Full HTTP response as Observable
  */
  public getProjects(): Observable<HttpResponse<Project[]>> {
    const uri = `/projects`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Project[]>('get', uri, headers, params, null);
  }

  /**
  * Method createProject
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public createProject(body: ProjectRequest): Observable<HttpResponse<any>> {
    const uri = `/projects`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method getProject
  * @param id Project Id or Name
  * @return Full HTTP response as Observable
  */
  public getProject(id: string): Observable<HttpResponse<Project>> {
    const uri = `/projects/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Project>('get', uri, headers, params, null);
  }

  /**
  * Updates exiting project using project id
  * Method updateProject
  * @param id API documentation for Testra
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public updateProject(id: string, body: ProjectRequest): Observable<HttpResponse<Project>> {
    const uri = `/projects/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Project>('put', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method deleteProject
  * @param id Project Id
  * @return Full HTTP response as Observable
  */
  public deleteProject(id: string): Observable<HttpResponse<Project>> {
    const uri = `/projects/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Project>('delete', uri, headers, params, null);
  }

  /**
  * Returns list of all scenarios within given project
  * Method getScenarios
  * @param projectId Project Id
  * @return Full HTTP response as Observable
  */
  public getScenarios(projectId: string): Observable<HttpResponse<Scenario[]>> {
    const uri = `/projects/${projectId}/scenarios`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Scenario[]>('get', uri, headers, params, null);
  }

  /**
  * Method createScenario
  * @param projectId Scenario Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public createScenario(projectId: string, body: ScenarioRequest): Observable<HttpResponse<any>> {
    const uri = `/projects/${projectId}/scenarios`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method getScenario
  * @param projectId Project Id
  * @param id Scenario Id
  * @return Full HTTP response as Observable
  */
  public getScenario(projectId: string, id: string): Observable<HttpResponse<Scenario>> {
    const uri = `/projects/${projectId}/scenarios/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Scenario>('get', uri, headers, params, null);
  }

  /**
  * Updates exiting scenario using scenario id
  * Method updateScenario
  * @param projectId Project Id
  * @param id Scenario Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public updateScenario(projectId: string, id: string, body: ScenarioRequest): Observable<HttpResponse<Scenario>> {
    const uri = `/projects/${projectId}/scenarios/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Scenario>('put', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method deleteScenario
  * @param projectId Project Id
  * @param id Scenario Id
  * @return Full HTTP response as Observable
  */
  public deleteScenario(projectId: string, id: string): Observable<HttpResponse<Scenario>> {
    const uri = `/projects/${projectId}/scenarios/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Scenario>('delete', uri, headers, params, null);
  }

  /**
  * Returns list of all testcases within given project
  * Method getTestcases
  * @param projectId Project Id
  * @return Full HTTP response as Observable
  */
  public getTestcases(projectId: string): Observable<HttpResponse<Testcase[]>> {
    const uri = `/projects/${projectId}/testcases`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Testcase[]>('get', uri, headers, params, null);
  }

  /**
  * Method createTestcase
  * @param projectId Testcase Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public createTestcase(projectId: string, body: TestcaseRequest): Observable<HttpResponse<any>> {
    const uri = `/projects/${projectId}/testcases`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method getTestcase
  * @param projectId Project Id
  * @param id Testcase Id
  * @return Full HTTP response as Observable
  */
  public getTestcase(projectId: string, id: string): Observable<HttpResponse<Testcase>> {
    const uri = `/projects/${projectId}/testcases/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Testcase>('get', uri, headers, params, null);
  }

  /**
  * Updates exiting testcase using testcase id
  * Method updateTestcase
  * @param projectId Project Id
  * @param id Testcase Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public updateTestcase(projectId: string, id: string, body: TestcaseRequest): Observable<HttpResponse<Testcase>> {
    const uri = `/projects/${projectId}/testcases/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Testcase>('put', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method deleteTestcase
  * @param projectId Project Id
  * @param id Testcase Id
  * @return Full HTTP response as Observable
  */
  public deleteTestcase(projectId: string, id: string): Observable<HttpResponse<Testcase>> {
    const uri = `/projects/${projectId}/testcases/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Testcase>('delete', uri, headers, params, null);
  }

  /**
  * Returns list of all executions within given project
  * Method getExecutions
  * @param projectId Project Id
  * @return Full HTTP response as Observable
  */
  public getExecutions(projectId: string): Observable<HttpResponse<Execution[]>> {
    const uri = `/projects/${projectId}/executions`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Execution[]>('get', uri, headers, params, null);
  }

  /**
  * Method createExecution
  * @param projectId Execution Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public createExecution(projectId: string, body: ExecutionRequest): Observable<HttpResponse<any>> {
    const uri = `/projects/${projectId}/executions`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method getExecution
  * @param projectId Project Id
  * @param id Execution Id
  * @return Full HTTP response as Observable
  */
  public getExecution(projectId: string, id: string): Observable<HttpResponse<Execution>> {
    const uri = `/projects/${projectId}/executions/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Execution>('get', uri, headers, params, null);
  }

  /**
  * Updates exiting execution using execution id
  * Method updateExecution
  * @param projectId Project Id
  * @param id Execution Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public updateExecution(projectId: string, id: string, body: ExecutionRequest): Observable<HttpResponse<Execution>> {
    const uri = `/projects/${projectId}/executions/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Execution>('put', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method deleteExecution
  * @param projectId Project Id
  * @param id Execution Id
  * @return Full HTTP response as Observable
  */
  public deleteExecution(projectId: string, id: string): Observable<HttpResponse<Execution>> {
    const uri = `/projects/${projectId}/executions/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Execution>('delete', uri, headers, params, null);
  }

  /**
  * Returns list of all results within given project and execution
  * Method getResults
  * @param projectId Project Id
  * @param executionId Execution Id
  * @param result Filter test results by the given result status
  * @return Full HTTP response as Observable
  */
  public getResults(projectId: string, executionId: string, result: string): Observable<HttpResponse<TestResult[]>> {
    const uri = `/projects/${projectId}/executions/${executionId}/results`;
    const headers = new HttpHeaders();
    let params = new HttpParams();
    if (result !== undefined && result !== null) {
      params = params.set('result', result + '');
    }
    return this.sendRequest<TestResult[]>('get', uri, headers, params, null);
  }

  /**
  * Method createResult
  * @param projectId Result Id
  * @param executionId Execution Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public createResult(projectId: string, executionId: string, body: TestResultRequest): Observable<HttpResponse<any>> {
    const uri = `/projects/${projectId}/executions/${executionId}/results`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<any>('post', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method getResult
  * @param projectId Project Id
  * @param executionId Execution Id
  * @param id Result Id
  * @return Full HTTP response as Observable
  */
  public getResult(projectId: string, executionId: string, id: string): Observable<HttpResponse<TestResult>> {
    const uri = `/projects/${projectId}/executions/${executionId}/results/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<TestResult>('get', uri, headers, params, null);
  }

  /**
  * Updates exiting result using result id
  * Method updateResult
  * @param projectId Project Id
  * @param executionId Execution Id
  * @param id Result Id
  * @param body API documentation for Testra
  * @return Full HTTP response as Observable
  */
  public updateResult(projectId: string, executionId: string, id: string, body: TestResultRequest): Observable<HttpResponse<TestResult>> {
    const uri = `/projects/${projectId}/executions/${executionId}/results/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<TestResult>('put', uri, headers, params, JSON.stringify(body));
  }

  /**
  * Method deleteResult
  * @param projectId Project Id
  * @param executionId Execution Id
  * @param id Result Id
  * @return Full HTTP response as Observable
  */
  public deleteResult(projectId: string, executionId: string, id: string): Observable<HttpResponse<TestResult>> {
    const uri = `/projects/${projectId}/executions/${executionId}/results/${id}`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<TestResult>('delete', uri, headers, params, null);
  }

  /**
  * Returns counters for Projects, Test executions, Test scenarions, Test cases and Test results
  * Method getCounters
  * @return Full HTTP response as Observable
  */
  public getCounters(): Observable<HttpResponse<Counter>> {
    const uri = `/counters`;
    const headers = new HttpHeaders();
    const params = new HttpParams();
    return this.sendRequest<Counter>('get', uri, headers, params, null);
  }

  private sendRequest<T>(method: string, uri: string, headers: HttpHeaders, params: HttpParams, body: any): Observable<HttpResponse<T>> {
    if (method === 'get') {
      return this.http.get<T>(this.domain + uri, { headers: headers.set('Accept', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'put') {
      return this.http.put<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'post') {
      return this.http.post<T>(this.domain + uri, body, { headers: headers.set('Content-Type', 'application/json'), params: params, observe: 'response' });
    } else if (method === 'delete') {
      return this.http.delete<T>(this.domain + uri, { headers: headers, params: params, observe: 'response' });
    } else {
      console.error('Unsupported request: ' + method);
      return Observable.throw('Unsupported request: ' + method);
    }
  }
}
