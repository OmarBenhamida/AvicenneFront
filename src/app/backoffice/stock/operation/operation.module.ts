import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntreeComponent } from './entree/entree.component';
import { SortieComponent } from './sortie/sortie.component';
import { HistoriqueComponent } from './historique/historique.component';
import { OperationComponent } from './operation.component';



@NgModule({
  declarations: [
    EntreeComponent,
    SortieComponent,
    HistoriqueComponent,
    OperationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OperationModule { }
