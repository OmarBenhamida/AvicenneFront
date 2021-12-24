import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { DetailsFactureComponent } from './details-facture/details-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { FactureComponent } from './facture.component';



@NgModule({
  declarations: [
    AddFactureComponent,
    DetailsFactureComponent,
    ListFactureComponent,
    FactureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FactureModule { }
