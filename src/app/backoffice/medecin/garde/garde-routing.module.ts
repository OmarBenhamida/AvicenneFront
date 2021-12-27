import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddGardeComponent } from './add-garde/add-garde.component';
import { DetailsGardeComponent } from './details-garde/details-garde.component';
import { GardeComponent } from './garde.component';





const routes: Routes = [
  {
    path: '',
    component: GardeComponent,
    children: [
      { path: 'add', component: AddGardeComponent },
      { path: 'details', component: DetailsGardeComponent },
      { path: 'list', component: AddGardeComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GardeRoutingModule {}
