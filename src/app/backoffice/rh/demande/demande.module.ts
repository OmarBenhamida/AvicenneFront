import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeComponent } from './demande.component';
import { DemandeRoutingModule } from './demande-routing.module';



@NgModule({
  declarations: [
    DemandeComponent
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule
  ]
})
export class DemandeModule { }
