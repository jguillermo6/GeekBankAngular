import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICalculationHistory } from '../dtos/icalculation-history';
import { CalculationService } from '../services/calculation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-calc',
  templateUrl: './history-calc.component.html',
  styleUrls: ['./history-calc.component.scss']
})
export class HistoryCalcComponent implements OnInit, OnDestroy {

  public calculationHistory: ICalculationHistory[];
  private subscription: Subscription;

  constructor(
    private _calculationService : CalculationService
  ) { 
    this.calculationHistory = new Array<ICalculationHistory>();
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this._calculationService.newCalcRegister$.subscribe(
      (result) => {        
        this.getHistory();
      }
    )
  }

  private getHistory(){
    this.subscription = this._calculationService.getHistory().subscribe(
      (result: ICalculationHistory[]) => {
        this.calculationHistory = result;
        this.subscription.unsubscribe();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
