import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {

  transform(data: Date, args: any): any {

    const day = data.getDate() > 9 ? data.getDate() : `0${data.getDate()}`;
    const month = data.getMonth() > 9 ? data.getMonth() : `0${data.getMonth()}`;
    const year = data.getFullYear();
    const hour = data.getHours() > 9 ? data.getHours() : `0${data.getHours()}`;
    const minutes = data.getMinutes() > 9 ? data.getMinutes() : `0${data.getMinutes()}`;
    const seconds = data.getSeconds() > 9 ? data.getSeconds() : `0${data.getSeconds()}`;

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
  }

}
