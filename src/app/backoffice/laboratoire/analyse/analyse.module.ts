import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseComponent } from './analyse.component';
import { AddAnalyseComponent } from './add-analyse/add-analyse.component';
import { DetailsAnalyseComponent } from './details-analyse/details-analyse.component';
import { ListAnalyseComponent } from './list-analyse/list-analyse.component';



@NgModule({
  declarations: [
    AnalyseComponent,
    AddAnalyseComponent,
    DetailsAnalyseComponent,
    ListAnalyseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnalyseModule { }
