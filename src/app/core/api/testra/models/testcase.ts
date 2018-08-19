/* tslint:disable */
export interface Testcase {
  id: string;
  projectId: string;
  name: string;
  namespaceId: string;
  manual?: boolean;
  tags?: Array<string>;
}
