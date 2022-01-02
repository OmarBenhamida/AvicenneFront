import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ContratComponent } from './contrat.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';




const routes: Routes = [
  {
    path: '',
    component: ContratComponent,
    children: [
      { path: 'add', component: AddContratComponent },
      { path: 'details', component: DetailsContratComponent },
      { path: 'list', component: ListContratComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratRoutingModule {}

