import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any[], key: string, isAsc: boolean): any {
    const orderBy: number = isAsc ? 1 : -1;
    return arr.sort((current, next) =>
    (current[key] < next[key] ? -1 : ((current[key] < next[key]) ? 1 : 0)) * orderBy);
  }

}
