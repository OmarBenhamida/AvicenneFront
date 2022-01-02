import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CongeComponent } from './conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { DetailsCongeComponent } from './details-conge/details-conge.component';
import { ListCongeComponent } from './list-conge/list-conge.component';




const routes: Routes = [
  {
    path: '',
    component: CongeComponent,
    children: [
      { path: 'add', component: AddCongeComponent },
      { path: 'details', component: DetailsCongeComponent },
      { path: 'list', component: ListCongeComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongeRoutingModule {}

