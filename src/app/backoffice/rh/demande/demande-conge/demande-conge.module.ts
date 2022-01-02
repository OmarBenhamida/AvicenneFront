import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeCongeComponent } from './demande-conge.component';
import { AdddemandeCongeComponent } from './adddemande-conge/adddemande-conge.component';
import { ListdemandeCongeComponent } from './listdemande-conge/listdemande-conge.component';
import { DetailsdemandeCongeComponent } from './detailsdemande-conge/detailsdemande-conge.component';
import { DemandeCongeRoutingModule } from './demande-conge-routing.module';



@NgModule({
  declarations: [
    DemandeCongeComponent,
    AdddemandeCongeComponent,
    ListdemandeCongeComponent,
    DetailsdemandeCongeComponent
  ],
  imports: [
    CommonModule,
    DemandeCongeRoutingModule
  ]
})
export class DemandeCongeModule { }
