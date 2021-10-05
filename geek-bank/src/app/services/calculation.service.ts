import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ICalculationResult } from '../dtos/icalculation-result';
import { environment } from 'src/environments/environment';
import { ICalculation } from '../dtos/icalculation';
import { ICalculationHistory } from '../dtos/icalculation-history';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {


  public newCalcRegister: BehaviorSubject<ICalculation>;
  public newCalcRegister$: Observable<ICalculation>;

  constructor(private _httpClient: HttpClient) { 
    this.newCalcRegister = new BehaviorSubject<ICalculation>({"firstValue":0, "secondValue":0});
    this.newCalcRegister$ = this.newCalcRegister.asObservable();
  }  

  public send(request: ICalculation): Observable<ICalculationResult> {    
    const apiUrl = `${environment.url}api/Calculation/Post`;
    return this._httpClient.post<ICalculationResult>(apiUrl, request);    
  }

  public getHistory(): Observable<ICalculationHistory[]> {    
    const apiUrl = `${environment.url}api/CalculationHistory/Get`;
    return this._httpClient.get<ICalculationHistory[]>(apiUrl);
  }
}
