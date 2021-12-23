import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAttestationComponent } from './list-attestation/list-attestation.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailsDemandeComponent } from './details-demande/details-demande.component';
import { AttestationtravailComponent } from './attestationtravail.component';



@NgModule({
  declarations: [
    ListAttestationComponent,
    AddDemandeComponent,
    DetailsDemandeComponent,
    AttestationtravailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AttestationtravailModule { }
