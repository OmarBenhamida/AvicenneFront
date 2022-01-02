import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthentificationComponent } from './authentification.component';




const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent,
    children: [
      

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {}
