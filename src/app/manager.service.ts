import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  public localList: any = {};

  constructor(private apiWrapperService: ApiWrapperService) {
    this.initListLoop();
  }

  /**
   * Inicializa el loop para la peticion del listado.
   */
  public initListLoop() {
    const methodName = `${ManagerService.name}::initListLoop`;
    console.log(methodName);

    this.apiWrapperService.getList()
      .then((response) => {
        console.log(`${methodName} (then)`);
        this.localList = response;
      })
      .catch(() => {
        console.log(`${methodName} (catch)`);
      });

    setInterval(() => {
      this.apiWrapperService.getList()
        .then((response) => {
          this.localList = response;
        })
        .catch(() => {

        });
    },
      600000);
  }

  /**
   * Retorna el valor actual basado en el tipo de conversion.
   */
  public getCurrentConvertion(currencyConvertion: string) {
    return this.localList.rates[currencyConvertion];
  }
}
