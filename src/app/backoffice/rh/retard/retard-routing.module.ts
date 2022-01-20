import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AddRetardComponent } from './add-retard/add-retard.component';
import { DetailsRetardComponent } from './details-retard/details-retard.component';
import { ListRetardComponent } from './list-retard/list-retard.component';
import { RetardComponent } from './retard.component';




const routes: Routes = [
  {
    path: '',
    component: RetardComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddRetardComponent },
      { path: 'details', component: DetailsRetardComponent },
      { path: 'list', component: ListRetardComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetardRoutingModule {}

