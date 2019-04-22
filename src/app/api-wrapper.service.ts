import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWrapperService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Api request.
   */
  public getList() {
    const url: string = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', '*')
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    };

    return this.httpClient.get(url, httpOptions).toPromise();
  }

}
