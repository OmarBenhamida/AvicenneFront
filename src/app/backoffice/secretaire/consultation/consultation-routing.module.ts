import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { ConsultationComponent } from './consultation.component';
import { ListConsultationComponent } from './list-consultation/list-consultation.component';
import { DetailsConsultationComponent } from './details-consultation/details-consultation.component';





const routes: Routes = [
  {
    path: '',
    component: ConsultationComponent,
    children: [
      { path: 'add', component: AddConsultationComponent },
      { path: 'details', component: DetailsConsultationComponent },
      { path: 'list', component: ListConsultationComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationRoutingModule {}
