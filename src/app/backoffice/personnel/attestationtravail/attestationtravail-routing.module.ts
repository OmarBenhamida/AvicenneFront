import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AttestationtravailComponent } from './attestationtravail.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailsDemandeComponent } from './details-demande/details-demande.component';





const routes: Routes = [
  {
    path: '',
    component: AttestationtravailComponent,
    children: [
      { path: 'add', component: AddDemandeComponent },
      { path: 'details', component: DetailsDemandeComponent },
      { path: 'list', component: AddDemandeComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttestationtravailRoutingModule {}
