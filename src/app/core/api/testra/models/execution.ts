/* tslint:disable */
export interface Execution {
  environment: string;
  id: string;
  parallel: boolean;
  host: string;
  startTime: number;
  endTime: number;
  projectId: string;
  branch: string;
  tags: Array<string>;
  description?: string;
  buildRef?: string;
  groupIds: Array<string>;
}
