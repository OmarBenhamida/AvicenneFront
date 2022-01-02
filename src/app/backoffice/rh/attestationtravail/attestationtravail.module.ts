import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttestationtravailComponent } from './attestationtravail.component';
import { AttestationtravailRoutingModule } from './attestationtravail-routing.module';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailsDemandeComponent } from './details-demande/details-demande.component';
import { ListAttestationComponent } from './list-attestation/list-attestation.component';



@NgModule({
  declarations: [

    AttestationtravailComponent,
    AddDemandeComponent,
    DetailsDemandeComponent,
    ListAttestationComponent

  ],
  imports: [
    CommonModule,
    AttestationtravailRoutingModule
  ]
})
export class AttestationtravailModule { }
