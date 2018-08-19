/* tslint:disable */
export interface TestGroup {
  id: string;
  name: string;
  projectId: string;
  type: 'FEATURE' | 'NAMESPACE';
  description: string;
  subGroup: string;
}
