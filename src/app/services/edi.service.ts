import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EdiService {

  url = AppConfig.baseUrl + '/edi';

  constructor(
    private http: Http
  ) { }

  getFilesInPath(path: string) {
    const url = this.url + '/buscar-arquivos';
    const data = { path: path };

    return this.http.post(url, data)
      .pipe(map(resp => resp.json()))
      .toPromise();
  }

  verifiFiles(filesNames: Array<string>, folder: string) {
    const url = this.url + '/verificar-arquivo';
    const data = { path: folder, listFilesName: filesNames };

    return this.http.post(url, data)
      .pipe(map(resp => resp.json()))
      .toPromise();
  }

}
