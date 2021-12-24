import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeCongeComponent } from './demande-conge.component';
import { AdddemandeCongeComponent } from './adddemande-conge/adddemande-conge.component';
import { ListdemandeCongeComponent } from './listdemande-conge/listdemande-conge.component';
import { DetailsdemandeCongeComponent } from './detailsdemande-conge/detailsdemande-conge.component';



@NgModule({
  declarations: [
    DemandeCongeComponent,
    AdddemandeCongeComponent,
    ListdemandeCongeComponent,
    DetailsdemandeCongeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemandeCongeModule { }
