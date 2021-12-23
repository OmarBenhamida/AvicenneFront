import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongeComponent } from './conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { DetailsCongeComponent } from './details-conge/details-conge.component';
import { ListCongeComponent } from './list-conge/list-conge.component';



@NgModule({
  declarations: [
    CongeComponent,
    AddCongeComponent,
    DetailsCongeComponent,
    ListCongeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CongeModule { }
