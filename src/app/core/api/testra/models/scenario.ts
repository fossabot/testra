/* tslint:disable */
import { TestStep } from './test-step';
export interface Scenario {
  tags: Array<string>;
  id: string;
  featureId: string;
  featureDescription: string;
  manual?: boolean;
  projectId: string;
  name: string;
  before: Array<TestStep>;
  after: Array<TestStep>;
  backgroundSteps: Array<TestStep>;
  steps: Array<TestStep>;
}
