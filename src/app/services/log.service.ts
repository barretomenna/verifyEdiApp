import { Injectable } from '@angular/core';
import { AppConfig } from '../../environments/environment';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

const url = AppConfig.baseUrl + '/log';

@Injectable({
  providedIn: 'root'
})

export class LogService {

  constructor(
    private http: Http
  ) { }

  getLogAmount(): any {
    return this.http.get(`${url}/amount`)
      .pipe(map(resp => resp.json()))
      .toPromise();
  }

}
