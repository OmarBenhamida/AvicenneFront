import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichepaieComponent } from './fichepaie/fichepaie.component';
import { AddFichepaieComponent } from './add-fichepaie/add-fichepaie.component';
import { DetailsFichepaieComponent } from './details-fichepaie/details-fichepaie.component';
import { ListFichepaieComponent } from './list-fichepaie/list-fichepaie.component';



@NgModule({
  declarations: [
    FichepaieComponent,
    AddFichepaieComponent,
    DetailsFichepaieComponent,
    ListFichepaieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FichepaieModule { }
