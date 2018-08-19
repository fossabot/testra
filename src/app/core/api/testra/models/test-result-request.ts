/* tslint:disable */
import {StepResult} from './step-result';
import {Attachment} from './attachment';

export interface TestResultRequest {
  startTime: number;
  targetId: string;
  resultType: 'SCENARIO' | 'TEST_CASE';
  status: 'PASSED' | 'FAILED' | 'PENDING' | 'SKIPPED' | 'AMBIGUOUS' | 'UNDEFINED' | 'UNKNOWN';
  error?: string;
  durationInMs: number;
  groupId: string;
  endTime: number;
  retryCount: number;
  expectedToFail?: boolean;
  stepResults?: Array<StepResult>;
  attachments?: Array<Attachment>;
}
