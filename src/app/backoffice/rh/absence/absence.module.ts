import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './absence.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsenceRoutingModule } from './absence-routing.module';



@NgModule({
  declarations: [
    AbsenceComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AbsenceRoutingModule
  ]
})
export class AbsenceModule { }
