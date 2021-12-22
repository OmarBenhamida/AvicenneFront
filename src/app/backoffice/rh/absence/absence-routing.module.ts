import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AbsenceComponent } from './absence.component';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { DetailsAbsenceComponent } from './details-absence/details-absence.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';




const routes: Routes = [
  {
    path: '',
    component: AbsenceComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'add', component: AddAbsenceComponent },
      { path: 'details', component: DetailsAbsenceComponent },
      { path: 'list', component: ListAbsenceComponent },

      { path: 'accueil', component: AbsenceComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsenceRoutingModule {}
