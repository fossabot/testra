/* tslint:disable */
import {SimulationScenario} from './simulation-scenario';

export interface Simulation {
  id?: string;
  projectId?: string;
  executionId?: string;
  name?: string;
  namespace?: string;
  scenarios?: Array<SimulationScenario>;
}
