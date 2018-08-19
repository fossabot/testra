/* tslint:disable */
import { StepResult } from './step-result';
import { Attachment } from './attachment';
import { Scenario } from './scenario';
import { Testcase } from './testcase';
export interface EnrichedTestResult {
  startTime: number;
  id: string;
  groupId: string;
  resultType: 'SCENARIO' | 'TEST_CASE';
  status: 'PASSED' | 'FAILED' | 'PENDING' | 'SKIPPED' | 'AMBIGUOUS' | 'UNDEFINED' | 'UNKNOWN';
  error?: string;
  durationInMs: number;
  targetId: string;
  endTime: number;
  retryCount: number;
  expectedToFail?: boolean;
  stepResults?: Array<StepResult>;
  attachments?: Array<Attachment>;
  scenario?: Scenario;
  testcase?: Testcase;
}
