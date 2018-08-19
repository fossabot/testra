/* tslint:disable */
export interface ExecutionRequest {
  parallel: boolean;
  host: string;
  endTime?: number;
  environment?: string;
  branch?: string;
  description?: string;
  buildRef?: string;
  tags?: Array<string>;
}
