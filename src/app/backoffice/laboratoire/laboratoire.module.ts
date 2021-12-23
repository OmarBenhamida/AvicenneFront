import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { LaboratoireComponent } from './laboratoire.component';



@NgModule({
  declarations: [
    PatientComponent,
    LaboratoireComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LaboratoireModule { }
