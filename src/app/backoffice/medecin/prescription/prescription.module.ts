import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { DetailsPrescriptionComponent } from './details-prescription/details-prescription.component';
import { ListPrescriptionComponent } from './list-prescription/list-prescription.component';
import { EncoursPrescriptionComponent } from './encours-prescription/encours-prescription.component';
import { PrescriptionComponent } from './prescription.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';



@NgModule({
  declarations: [
    PrescriptionComponent,
    AddPrescriptionComponent,
    DetailsPrescriptionComponent,
    ListPrescriptionComponent,
    EncoursPrescriptionComponent
  ],
  imports: [
    CommonModule,
    PrescriptionRoutingModule
  ]
})
export class PrescriptionModule { }
