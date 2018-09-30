import {Pipe, PipeTransform} from '@angular/core';
import * as numeral from 'numeral';

@Pipe({
  name: 'addCommas'
})
export class AddCommasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return numeral(value).format('0,0');
  }
}
