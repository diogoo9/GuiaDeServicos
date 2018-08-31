import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OrgaosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrgaosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OrgaosProvider Provider');
  }
  getOrgao():Promise<any>{
   return  this.http.get('http://www.servicos.al.gov.br/api/v1/units.json').toPromise();
  }
}
