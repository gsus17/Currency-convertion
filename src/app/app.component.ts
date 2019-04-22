import { Component } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Valor inicial a calcular.
   */
  public initialValue: number = 0;

  /**
   * Valor de resultado.
   */
  public resultValue: number = 0;

  /**
   * Tipo de conversion a calcular.
   */
  public currencyConvertion: string = 'USD';

  constructor(private managerService: ManagerService) {

  }

  /**
   * Realiza el proceso de conversion.
   */
  public calculate(): void {
    const currentConvertion = this.managerService.getCurrentConvertion(this.currencyConvertion);
    this.resultValue = this.initialValue * currentConvertion;
  }
}
