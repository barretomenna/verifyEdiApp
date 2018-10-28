import { Pipe, PipeTransform } from '@angular/core';
import Log from '../../../entidades/log';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(itens: Array<Log>, termo: string): any {

    if (termo === undefined) {
      return itens;
    }

    const retorno = itens.filter(item =>
      item.arquivo.toUpperCase().match(termo.toUpperCase())
    );

    return retorno;
  }

}
