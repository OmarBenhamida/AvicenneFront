import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnalyseComponent } from './analyse.component';
import { AddAnalyseComponent } from './add-analyse/add-analyse.component';
import { DetailsAnalyseComponent } from './details-analyse/details-analyse.component';
import { ListAnalyseComponent } from './list-analyse/list-analyse.component';





const routes: Routes = [
  {
    path: '',
    component: AnalyseComponent,
    children: [
      { path: 'add', component: AddAnalyseComponent },
      { path: 'details', component: DetailsAnalyseComponent },
      { path: 'list', component: ListAnalyseComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyseRoutingModule {}
