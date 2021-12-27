import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GardeComponent } from './garde.component';
import { AddGardeComponent } from './add-garde/add-garde.component';
import { DetailsGardeComponent } from './details-garde/details-garde.component';
import { ListGardeComponent } from './list-garde/list-garde.component';
import { EncoursGardeComponent } from './encours-garde/encours-garde.component';
import { GardeRoutingModule } from './garde-routing.module';



@NgModule({
  declarations: [
    GardeComponent,
    AddGardeComponent,
    DetailsGardeComponent,
    ListGardeComponent,
    EncoursGardeComponent
  ],
  imports: [
    CommonModule,
    GardeRoutingModule
  ]
})
export class GardeModule { }
