import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdddemandeCongeComponent } from './adddemande-conge/adddemande-conge.component';
import { DemandeCongeComponent } from './demande-conge.component';
import { DetailsdemandeCongeComponent } from './detailsdemande-conge/detailsdemande-conge.component';
import { ListdemandeCongeComponent } from './listdemande-conge/listdemande-conge.component';




const routes: Routes = [
  {
    path: '',
    component: DemandeCongeComponent,
    children: [
      { path: 'add', component: AdddemandeCongeComponent },
      { path: 'details', component: DetailsdemandeCongeComponent },
      { path: 'list', component: ListdemandeCongeComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeCongeRoutingModule {}
