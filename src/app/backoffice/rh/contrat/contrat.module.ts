import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { ContratComponent } from './contrat.component';
import { ContratRoutingModule } from './contrat-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListContratComponent,
    AddContratComponent,
    DetailsContratComponent,
    ContratComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
      ContratRoutingModule
  ]
})
export class ContratModule { }
