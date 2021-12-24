import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription/prescription.component';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { DetailsPrescriptionComponent } from './details-prescription/details-prescription.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';



@NgModule({
  declarations: [
    PrescriptionComponent,
    AddPrescriptionComponent,
    DetailsPrescriptionComponent,
    ListPrescriptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrescriptionModule { }
