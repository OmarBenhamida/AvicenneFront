import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DmComponent } from './dm.component';
import { ConsultDmComponent } from './consult-dm/consult-dm.component';
import { ListDmComponent } from './list-dm/list-dm.component';





const routes: Routes = [
  {
    path: '',
    component: DmComponent,
    children: [
      { path: 'search', component: ConsultDmComponent },
      { path: 'list', component: ListDmComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmRoutingModule {}
