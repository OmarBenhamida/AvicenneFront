import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { FactureComponent } from './facture.component';
import { FactureRoutingModule } from './facture-routing.module';
import { EncoursComponent } from '../encours/encours.component';



@NgModule({
  declarations: [
    AddFactureComponent,
    DetailsFactureComponent,
    ListFactureComponent,
    FactureComponent,
    EncoursComponent,

  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
