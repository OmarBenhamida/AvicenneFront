import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddPrescriptionComponent } from './add-prescription/add-prescription.component';
import { DetailsPrescriptionComponent } from './details-prescription/details-prescription.component';
import { PrescriptionComponent } from './prescription.component';


const routes: Routes = [
  {
    path: '',
    component: PrescriptionComponent,
    children: [
      { path: 'add', component: AddPrescriptionComponent },
      { path: 'details', component: DetailsPrescriptionComponent },
      { path: 'list', component: AddPrescriptionComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionRoutingModule {}
