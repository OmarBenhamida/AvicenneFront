import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddAutorisationComponent } from './add-autorisation/add-autorisation.component';
import { AutorisationComponent } from './autorisation.component';


const routes: Routes = [
  {
    path: '',
    component: AutorisationComponent,
    children: [
      { path: 'add', component: AddAutorisationComponent },
      { path: 'list', component: AddAutorisationComponent },

      //{ path: 'accueil', component: FactureComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorisationRoutingModule {}
