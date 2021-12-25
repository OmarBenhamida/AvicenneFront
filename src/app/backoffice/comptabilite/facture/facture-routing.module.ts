import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FactureComponent } from './facture.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';




const routes: Routes = [
  {
    path: '',
    component: FactureComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'add', component: AddFactureComponent },
      { path: 'details', component: DetailsFactureComponent },
      { path: 'list', component: ListFactureComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureRoutingModule {}
