/* tslint:disable */
import {TestStep} from './test-step';

export interface ScenarioRequest {
  name: string;
  featureName: string;
  featureDescription: string;
  manual?: boolean;
  tags?: Array<string>;
  before?: Array<TestStep>;
  after?: Array<TestStep>;
  backgroundSteps?: Array<TestStep>;
  steps: Array<TestStep>;
}
