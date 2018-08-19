/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Counter } from '../models/counter';
@Injectable({
  providedIn: 'root',
})
class CounterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Returns counters for Projects, Test executions, Test scenarions, Test cases and Test results
   * @return Successful Response
   */
  getCountersResponse(): Observable<HttpResponse<Counter>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/counters`,
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
        let _body: Counter = null;
        _body = _resp.body as Counter;
        return _resp.clone({body: _body}) as HttpResponse<Counter>;
      })
    );
  }

  /**
   * Returns counters for Projects, Test executions, Test scenarions, Test cases and Test results
   * @return Successful Response
   */
  getCounters(): Observable<Counter> {
    return this.getCountersResponse().pipe(
      map(_r => _r.body)
    );
  }
}

module CounterService {
}

export { CounterService }
