/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Contains global configuration for API services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = 'http://testra-api.herokuapp.com/api/v1/';
}
