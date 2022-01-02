import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddFichepaieComponent } from './add-fichepaie/add-fichepaie.component';
import { DetailsFichepaieComponent } from './details-fichepaie/details-fichepaie.component';
import { FichepaieComponent } from './fichepaie.component';
import { ListFichepaieComponent } from './list-fichepaie/list-fichepaie.component';




const routes: Routes = [
  {
    path: '',
    component: FichepaieComponent,
    children: [
      { path: 'add', component: AddFichepaieComponent },
      { path: 'details', component: DetailsFichepaieComponent },
      { path: 'list', component: ListFichepaieComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichepaieRoutingModule {}

