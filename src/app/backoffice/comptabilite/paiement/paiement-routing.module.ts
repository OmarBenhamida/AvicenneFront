import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaiementComponent } from './paiement.component';
import { AddPaiementComponent } from './add-paiement/add-paiement.component';
import { DetailsPaiementComponent } from './details-paiement/details-paiement.component';
import { ListPaiementComponent } from './list-paiement/list-paiement.component';




const routes: Routes = [
  {
    path: '',
    component: PaiementComponent,
    children: [
      { path: 'add', component: AddPaiementComponent },
      { path: 'details', component: DetailsPaiementComponent },
      { path: 'list', component: ListPaiementComponent },

      { path: 'accueil', component: PaiementComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementRoutingModule {}
