import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeComponent } from './demande.component';
import { DemandeRoutingModule } from './demande-routing.module';
import { MenudComponent } from './menud/menud.component';



@NgModule({
  declarations: [
    DemandeComponent,
    MenudComponent
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule
  ]
})
export class DemandeModule { }
