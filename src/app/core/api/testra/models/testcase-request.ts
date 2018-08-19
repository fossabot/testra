/* tslint:disable */
export interface TestcaseRequest {
  name: string;
  namespace: string;
  className: string;
  manual?: boolean;
  tags?: Array<string>;
}
