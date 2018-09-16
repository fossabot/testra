/* tslint:disable */
import {SimulationScenario} from './simulation-scenario';

export interface SimulationRequest {
  name: string;
  namespace: string;
  scenarios: Array<SimulationScenario>;
}
