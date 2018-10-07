/* tslint:disable */
export interface TestExecutionStats {
  id?: string;
  executionId?: string;
  projectId?: string;
  passed?: number;
  failed?: number;
  manual?: number;
  expectedFailures?: number;
  others?: number;
}
