import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemandeAttestationComponent } from './demande-attestation.component';
import { AdddemandeAttestationComponent } from './adddemande-attestation/adddemande-attestation.component';
import { DetailsdemandeAttestationComponent } from './detailsdemande-attestation/detailsdemande-attestation.component';
import { ListdemandeAttestationComponent } from './listdemande-attestation/listdemande-attestation.component';




const routes: Routes = [
  {
    path: '',
    component: DemandeAttestationComponent,
    children: [
      { path: 'add', component: AdddemandeAttestationComponent },
      { path: 'details', component: DetailsdemandeAttestationComponent },
      { path: 'list', component: ListdemandeAttestationComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeAttestationRoutingModule {}
