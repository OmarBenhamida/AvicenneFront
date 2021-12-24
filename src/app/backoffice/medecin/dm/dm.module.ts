import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDmComponent } from './list-dm/list-dm.component';
import { ConsultDmComponent } from './consult-dm/consult-dm.component';
import { DmComponent } from './dm/dm.component';



@NgModule({
  declarations: [
    ListDmComponent,
    ConsultDmComponent,
    DmComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DmModule { }
