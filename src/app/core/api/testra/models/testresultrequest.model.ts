import { StepResult } from './stepresult.model';
import { Attachment } from './attachment.model';

export enum ResultType {
  SCENARIO = 'SCENARIO',
  TESTCASE = 'TESTCASE'
}

export enum Result {
  PASSED = 'PASSED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  SKIPPED = 'SKIPPED',
  AMBIGUOUS = 'AMBIGUOUS',
  UNDEFINED = 'UNDEFINED',
  UNKNOWN = 'UNKNOWN'
}

export interface TestResultRequest {
  targetId: string;
  resultType: ResultType;
  result: Result;
  error: string;
  durationInMs: number;
  startTime: number;
  endTime: number;
  retryCount: number;
  stepResults: StepResult[];
  attachments: Attachment[];
}
