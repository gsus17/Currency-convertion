import { Injectable } from '@angular/core';
import { ApiWrapperService } from './api-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  /**
   * Listado de conversiones local.
   */
  public localList: any = {};

  /**
   * Referencia del interval encargado de realizar la actualizacion del listado local.
   */
  private intervalLoopReference = null;

  constructor(private apiWrapperService: ApiWrapperService) {
    console.log(`${ApiWrapperService.name}::ctor`);

    this.initListLoop();
  }

  /**
   * Inicializa el loop para la peticion del listado.
   */
  public initListLoop(): void {
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

    // Cada 10 min realiza la peticion al api.
    this.intervalLoopReference = setInterval(() => {
      this.apiWrapperService.getList()
        .then((response) => {
          console.log(`${methodName} (then)`);

          // Actualiza la lista local.
          this.localList = response;
        })
        .catch(() => {
          console.log(`${methodName} (catch)`);
        });
    },
      600000); // 10 min.
  }

  /**
   * Retorna el valor actual basado en el tipo de conversion.
   */
  public getCurrentConvertion(currencyConvertion: string): any {
    return this.localList.rates[currencyConvertion];
  }

  /**
   * Detiene el proceso de actualizacion.
   */
  public stopIntervalLoop(): void {
    console.log(`${ApiWrapperService.name}::stopIntervalLoop`);

    clearInterval(this.intervalLoopReference);
  }
}
