import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddConsultationComponent } from './add-consultation/add-consultation.component';
import { ListConsultationComponent } from './list-consultation/list-consultation.component';
import { DetailsConsultationComponent } from './details-consultation/details-consultation.component';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';



@NgModule({
  declarations: [
    AddConsultationComponent,
    ListConsultationComponent,
    DetailsConsultationComponent,
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule
  ]
})
export class ConsultationModule { }
