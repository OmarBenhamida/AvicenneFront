import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient/patient.component';
import { LaboratoireComponent } from './laboratoire.component';
import { LaboratoireRoutingModule } from './laboratoire-routing.module';



@NgModule({
  declarations: [
    PatientComponent,
    LaboratoireComponent
  ],
  imports: [
    CommonModule,
    LaboratoireRoutingModule
  ]
})
export class LaboratoireModule { }
