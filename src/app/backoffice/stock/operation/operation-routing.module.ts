import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OperationComponent } from './operation.component';
import { EntreeComponent } from './entree/entree.component';
import { HistoriqueComponent } from './historique/historique.component';
import { SortieComponent } from './sortie/sortie.component';




const routes: Routes = [
  {
    path: '',
    component: OperationComponent,
    children: [
      { path: 'entree', component: EntreeComponent },
      { path: 'sortie', component: SortieComponent },
      { path: 'historique', component: HistoriqueComponent },

      //{ path: 'accueil', component: OperationComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationRoutingModule {}
