import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { ContratComponent } from './contrat/contrat.component';



@NgModule({
  declarations: [
    ListContratComponent,
    AddContratComponent,
    DetailsContratComponent,
    ContratComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContratModule { }
