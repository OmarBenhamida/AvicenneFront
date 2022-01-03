import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaireComponent } from './secretaire.component';
import { SecretaireRoutingModule } from './secretaire-routing.module';



@NgModule({
  declarations: [
    SecretaireComponent
  ],
  imports: [
    CommonModule,
    SecretaireRoutingModule
  ]
})
export class SecretaireModule { }
