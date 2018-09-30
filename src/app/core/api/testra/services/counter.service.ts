/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {Observable} from 'rxjs';
import {filter as __filter, map as __map} from 'rxjs/operators';

import {Counter} from '../models/counter';

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
  getCountersResponse(): Observable<StrictHttpResponse<Counter>> {
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
      __filter(_r => _r instanceof HttpResponse),
      __map((_r: HttpResponse<any>) => {
        return _r as StrictHttpResponse<Counter>;
      })
    );
  }

  /**
   * Returns counters for Projects, Test executions, Test scenarions, Test cases and Test results
   * @return Successful Response
   */
  getCounters(): Observable<Counter> {
    return this.getCountersResponse().pipe(
      __map(_r => _r.body)
    );
  }
}

module CounterService {
}

export {CounterService};
