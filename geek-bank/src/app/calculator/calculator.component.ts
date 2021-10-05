import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculationService } from '../services/calculation.service';
import { ICalculationResult } from '../dtos/icalculation-result';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {


  public calculationForm: FormGroup;

  constructor(
    private _calculationService : CalculationService,
    private _messageService: MessageService
  ) { 
    this.calculationForm = new FormGroup({
      "firstValue": new FormControl(null, [Validators.required, Validators.min(1)]),
      "secondValue": new FormControl(null, [Validators.required, Validators.min(1)])
    })

  }

  ngOnInit(): void {
  }

  public onSubmit(): void{    
    let subcribe = this._calculationService.send(this.calculationForm.value).subscribe(
      (response: ICalculationResult) => {
        this.showMessage(response);
        this._calculationService.newCalcRegister.next(this.calculationForm.value)
        subcribe.unsubscribe();
      }
    );
  }

  private showMessage(response: ICalculationResult): void{
    if (response.isFibonacciSequence) {
      this._messageService.add({severity:'success', summary:'Is in the fibonacci sequence', detail:`Result is: ${response.result} and its is in the fibonacci sequen`});
    }
    else{
      this._messageService.add({severity:'info', summary:'Is not in the fibonacci sequence', detail:`Result is: ${response.result} and its is not in the fibonacci sequen`});
    }
  }

}
