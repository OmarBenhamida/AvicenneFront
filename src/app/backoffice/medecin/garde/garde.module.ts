import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardeComponent } from './garde.component';
import { AddGardeComponent } from './add-garde/add-garde.component';
import { DetailsGardeComponent } from './details-garde/details-garde.component';
import { ListGardeComponent } from './list-garde/list-garde.component';



@NgModule({
  declarations: [
    GardeComponent,
    AddGardeComponent,
    DetailsGardeComponent,
    ListGardeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GardeModule { }
