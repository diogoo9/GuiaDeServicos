import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicosProvider Provider');
  }

  getServicos(): Promise<any> {
    return this.http.get('http://www.servicos.al.gov.br/api/v1/services.json').toPromise();
  }

}
