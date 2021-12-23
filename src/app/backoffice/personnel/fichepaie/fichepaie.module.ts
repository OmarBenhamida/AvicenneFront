import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichepaieComponent } from './fichepaie.component';
import { AddFichepaieComponent } from './add-fichepaie/add-fichepaie.component';
import { ListFichepaieComponent } from './list-fichepaie/list-fichepaie.component';
import { DetailsFichepaieComponent } from './details-fichepaie/details-fichepaie.component';



@NgModule({
  declarations: [
    FichepaieComponent,
    AddFichepaieComponent,
    ListFichepaieComponent,
    DetailsFichepaieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FichepaieModule { }
