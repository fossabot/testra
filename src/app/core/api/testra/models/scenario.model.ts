import { TestStep } from './teststep.model';

export interface Scenario {
  id: string;
  projectId: string;
  featureId: string;
  featureDescription: string;
  tags: string[];
  name: string;
  before: TestStep[];
  after: TestStep[];
  backgroundSteps: TestStep[];
  steps: TestStep[];
}
