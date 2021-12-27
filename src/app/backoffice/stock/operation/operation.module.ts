import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntreeComponent } from './entree/entree.component';
import { SortieComponent } from './sortie/sortie.component';
import { HistoriqueComponent } from './historique/historique.component';
import { OperationComponent } from './operation.component';
import { EncoursOperationComponent } from './encours-operation/encours-operation.component';



@NgModule({
  declarations: [
    EntreeComponent,
    SortieComponent,
    HistoriqueComponent,
    OperationComponent,
    EncoursOperationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperationModule { }
