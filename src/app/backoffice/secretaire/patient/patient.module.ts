import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [
    AddPatientComponent,
    ListPatientComponent,
    DetailsPatientComponent,
    EditPatientComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
