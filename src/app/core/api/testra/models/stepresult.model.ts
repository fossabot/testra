
export enum Result {
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  SKIPPED = 'SKIPPED',
  AMBIGUOUS = 'AMBIGUOUS',
  UNDEFINED = 'UNDEFINED',
  UNKNOWN = 'UNKNOWN'
}

export interface StepResult {
  index: number;
  result: Result;
  durationInMs: number;
  error: string;
}
