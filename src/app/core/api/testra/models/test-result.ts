/* tslint:disable */
import {StepResult} from './step-result';
import {Attachment} from './attachment';

export interface TestResult {
  durationInMs: number;
  id: string;
  groupId: string;
  resultType: 'SCENARIO' | 'TEST_CASE';
  status: 'PASSED' | 'FAILED' | 'PENDING' | 'SKIPPED' | 'AMBIGUOUS' | 'UNDEFINED' | 'UNKNOWN';
  error?: string;
  targetId: string;
  startTime: number;
  endTime: number;
  retryCount: number;
  expectedToFail?: boolean;
  stepResults?: Array<StepResult>;
  attachments?: Array<Attachment>;
}
