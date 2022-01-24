import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongeComponent } from './conge.component';
import { AddCongeComponent } from './add-conge/add-conge.component';
import { DetailsCongeComponent } from './details-conge/details-conge.component';
import { ListCongeComponent } from './list-conge/list-conge.component';
import { CongeRoutingModule } from './conge-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CongeComponent,
    AddCongeComponent,
    DetailsCongeComponent,
    ListCongeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    CongeRoutingModule
  ]
})
export class CongeModule { }
