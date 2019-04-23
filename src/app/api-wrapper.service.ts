import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

  constructor(private httpClient: HttpClient) {
    console.log(`${ApiWrapperService.name}::ctor`);
   }

  /**
   * Api request.
   */
  public getList() {
    const url: string = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';
    return this.httpClient.get(url).toPromise();
  }

}
