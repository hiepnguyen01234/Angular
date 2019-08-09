import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 18) {
      return (value + "    => buffowlow, enough old to love");
    }
    else {
      return value;
    }
  }

}
