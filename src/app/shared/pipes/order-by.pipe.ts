import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any[], key: string, isAsc: boolean): any {
    const multi = isAsc ? 1 : -1;
    if (!Array.isArray(arr)) {
      return;
    }
    return arr.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return -1 * multi;
      } else if (a[key] > b[key]) {
        return 1 * multi;
      } else {
        return 0;
      }
    });
  }

}
