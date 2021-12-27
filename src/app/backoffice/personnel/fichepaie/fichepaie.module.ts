import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichepaieComponent } from './fichepaie.component';
import { AddFichepaieComponent } from './add-fichepaie/add-fichepaie.component';
import { ListFichepaieComponent } from './list-fichepaie/list-fichepaie.component';
import { DetailsFichepaieComponent } from './details-fichepaie/details-fichepaie.component';
import { ErreComponent } from './erre/erre.component';
import { FichepaieRoutingModule } from './fichepaie-routing.module';



@NgModule({
  declarations: [
    FichepaieComponent,
    AddFichepaieComponent,
    ListFichepaieComponent,
    DetailsFichepaieComponent,
    ErreComponent
  ],
  imports: [
    CommonModule,
    FichepaieRoutingModule
  ]
})
export class FichepaieModule { }
