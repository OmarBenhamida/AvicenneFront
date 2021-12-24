import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPaiementComponent } from './add-paiement/add-paiement.component';
import { DetailsPaiementComponent } from './details-paiement/details-paiement.component';
import { ListPaiementComponent } from './list-paiement/list-paiement.component';
import { PaiementComponent } from './paiement.component';



@NgModule({
  declarations: [
    AddPaiementComponent,
    DetailsPaiementComponent,
    ListPaiementComponent,
    PaiementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaiementModule { }
