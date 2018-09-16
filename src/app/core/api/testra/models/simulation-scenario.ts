/* tslint:disable */
import {Percentile} from './percentile';

export interface SimulationScenario {
  errorCount?: number;
  request?: string;
  endTime?: number;
  durationInMs?: number;
  count?: number;
  successCount?: number;
  startTime?: number;
  min?: number;
  max?: number;
  percentiles?: Array<Percentile>;
  average?: number;
  stdDiv?: number;
  avgRequestPerSec?: number;
}
