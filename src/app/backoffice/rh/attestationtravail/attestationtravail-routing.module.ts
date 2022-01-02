import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AttestationtravailComponent } from './attestationtravail.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailsDemandeComponent } from './details-demande/details-demande.component';
import { ListAttestationComponent } from './list-attestation/list-attestation.component';




const routes: Routes = [
  {
    path: '',
    component: AttestationtravailComponent,
    children: [
      { path: 'add', component: AddDemandeComponent },
      { path: 'details', component: DetailsDemandeComponent },
      { path: 'list', component: ListAttestationComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttestationtravailRoutingModule {}

