import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp',
})
export class ExpPipe implements PipeTransform {
  transform(num: number, exp: number = 1): any {
    return Math.pow(num, exp);
  }
}
