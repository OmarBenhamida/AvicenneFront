import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



import { AddPatientComponent } from './add-patient/add-patient.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientComponent } from './patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';





const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    children: [
      { path: 'add', component: AddPatientComponent },
      { path: 'details', component: DetailsPatientComponent },
      { path: 'edit', component: EditPatientComponent },
      { path: 'list', component: ListPatientComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
