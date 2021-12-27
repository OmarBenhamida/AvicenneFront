import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EchantillonComponent } from './echantillon.component';
import { AddEchantillonComponent } from './add-echantillon/add-echantillon.component';
import { DetailsEchantillonComponent } from './details-echantillon/details-echantillon.component';





const routes: Routes = [
  {
    path: '',
    component: EchantillonComponent,
    children: [
      { path: 'add', component: AddEchantillonComponent },
      { path: 'details', component: DetailsEchantillonComponent },
      { path: 'list', component: AddEchantillonComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EchantillonRoutingModule {}
