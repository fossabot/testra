import { Pipe, PipeTransform } from '@angular/core';
import * as prettyMs from 'pretty-ms';

@Pipe({
  name: 'prettyDuration'
})
export class PrettyDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return prettyMs(value);
  }
}
