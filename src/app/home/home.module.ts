import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber'
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FloatLabelModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    TableModule
  ],
  exports: [
    FormsModule,
    HomeComponent,
    FloatLabelModule,
    CalendarModule,
    InputTextModule,
    InputNumberModule,
    TableModule
  ]
})
export class HomeModule { }
