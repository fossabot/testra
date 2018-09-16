/* tslint:disable */
export interface ProjectRequest {
  name: string;
  projectType?: 'TEST' | 'SIMULATION' | 'SECURITY';
  description?: string;
}
