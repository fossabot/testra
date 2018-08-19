/* tslint:disable */
import { DataTableRow } from './data-table-row';
export interface TestStep {
  index: number;
  text: string;
  dataTableRows?: Array<DataTableRow>;
}
