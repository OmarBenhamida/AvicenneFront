import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseComponent } from './analyse.component';
import { AddAnalyseComponent } from './add-analyse/add-analyse.component';
import { DetailsAnalyseComponent } from './details-analyse/details-analyse.component';
import { ListAnalyseComponent } from './list-analyse/list-analyse.component';
import { EncoursAnalyseComponent } from './encours-analyse/encours-analyse.component';
import { AnalyseRoutingModule } from './analyse-routing.module';



@NgModule({
  declarations: [
    AnalyseComponent,
    AddAnalyseComponent,
    DetailsAnalyseComponent,
    ListAnalyseComponent,
    EncoursAnalyseComponent
  ],
  imports: [
    CommonModule,
    AnalyseRoutingModule
  ]
})
export class AnalyseModule { }
