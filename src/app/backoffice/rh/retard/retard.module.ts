import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetardComponent } from './retard.component';
import { AddRetardComponent } from './add-retard/add-retard.component';
import { DetailsRetardComponent } from './details-retard/details-retard.component';
import { ListRetardComponent } from './list-retard/list-retard.component';
import { RetardRoutingModule } from './retard-routing.module';



@NgModule({
  declarations: [
    RetardComponent,
    AddRetardComponent,
    DetailsRetardComponent,
    ListRetardComponent
  ],
  imports: [
    CommonModule,
    RetardRoutingModule
  ]
})
export class RetardModule { }
