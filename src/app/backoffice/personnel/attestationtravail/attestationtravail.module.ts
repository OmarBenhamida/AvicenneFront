import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAttestationComponent } from './list-attestation/list-attestation.component';
import { AddDemandeComponent } from './add-demande/add-demande.component';
import { DetailsDemandeComponent } from './details-demande/details-demande.component';
import { AttestationtravailComponent } from './attestationtravail.component';
import { ErreComponent } from './erre/erre.component';
import { AttestationtravailRoutingModule } from './attestationtravail-routing.module';



@NgModule({
  declarations: [
    ListAttestationComponent,
    AddDemandeComponent,
    DetailsDemandeComponent,
    AttestationtravailComponent,
    ErreComponent
  ],
  imports: [
    CommonModule,
    AttestationtravailRoutingModule
  ]
})
export class AttestationtravailModule { }
