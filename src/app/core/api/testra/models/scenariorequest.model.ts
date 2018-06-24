import { TestStep } from './teststep.model';

export interface ScenarioRequest {
  name: string;
  featureName: string;
  featureDescription: string;
  tags: string[];
  before: TestStep[];
  after: TestStep[];
  backgroundSteps: TestStep[];
  steps: TestStep[];
}
