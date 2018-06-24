
export interface ExecutionRequest {
  isParallel: boolean;
  host: string;
  endTime: number;
  environment: string;
  branch: string;
  tags: string[];
}
