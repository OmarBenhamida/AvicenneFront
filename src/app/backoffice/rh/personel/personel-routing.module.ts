import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonelComponent } from './personel.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { DetailsPersonnelComponent } from './details-personnel/details-personnel.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';




const routes: Routes = [
  {
    path: '',
    component: PersonelComponent,
    children: [
      { path: 'add', component: AddPersonnelComponent },
      { path: 'details', component: DetailsPersonnelComponent },
      { path: 'list', component: ListPersonnelComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonelRoutingModule {}

