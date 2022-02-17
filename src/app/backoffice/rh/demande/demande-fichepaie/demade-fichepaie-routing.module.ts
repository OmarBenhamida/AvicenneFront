import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdddemandeFichepaieComponent } from './adddemande-fichepaie/adddemande-fichepaie.component';
import { DemandeFichepaieComponent } from './demande-fichepaie.component';
import { DetailsdemandeFichepaieComponent } from './detailsdemande-fichepaie/detailsdemande-fichepaie.component';
import { ListdemandeFichepaieComponent } from './listdemande-fichepaie/listdemande-fichepaie.component';




const routes: Routes = [
  {
    path: '',
    component: DemandeFichepaieComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AdddemandeFichepaieComponent },
      { path: 'details', component: DetailsdemandeFichepaieComponent },
      { path: 'list', component: ListdemandeFichepaieComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeFichepaieRoutingModule {}
