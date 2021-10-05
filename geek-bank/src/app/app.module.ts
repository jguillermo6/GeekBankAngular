import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalculationService } from './services/calculation.service';
import { HistoryCalcComponent } from './history-calc/history-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HistoryCalcComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    ToastModule
  ],
  providers: [CalculationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
