/* tslint:disable */
export interface StepResult {
  index: number;
  status: 'PASSED' | 'FAILED' | 'PENDING' | 'SKIPPED' | 'AMBIGUOUS' | 'UNDEFINED' | 'UNKNOWN';
  durationInMs: number;
  error?: string;
}
