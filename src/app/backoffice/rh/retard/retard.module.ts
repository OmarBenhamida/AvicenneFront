import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetardComponent } from './retard/retard.component';
import { AddRetardComponent } from './add-retard/add-retard.component';
import { DetailsRetardComponent } from './details-retard/details-retard.component';
import { ListRetardComponent } from './list-retard/list-retard.component';



@NgModule({
  declarations: [
    RetardComponent,
    AddRetardComponent,
    DetailsRetardComponent,
    ListRetardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RetardModule { }
