import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEchantillonComponent } from './add-echantillon/add-echantillon.component';
import { EchantillonComponent } from './echantillon.component';
import { DetailsEchantillonComponent } from './details-echantillon/details-echantillon.component';
import { ListEchantillonComponent } from './list-echantillon/list-echantillon.component';
import { EncoursEchantillonComponent } from './encours-echantillon/encours-echantillon.component';
import { EchantillonRoutingModule } from './echantillon-routing.module';



@NgModule({
  declarations: [
    AddEchantillonComponent,
    EchantillonComponent,
    DetailsEchantillonComponent,
    ListEchantillonComponent,
    EncoursEchantillonComponent
  ],
  imports: [
    CommonModule,
    EchantillonRoutingModule
  ]
})
export class EchantillonModule { }
