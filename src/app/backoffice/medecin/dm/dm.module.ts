import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDmComponent } from './list-dm/list-dm.component';
import { ConsultDmComponent } from './consult-dm/consult-dm.component';
import { EncoursDmComponent } from './encours-dm/encours-dm.component';
import { DmRoutingModule } from './dm-routing.module';
import { DmComponent } from './dm.component';



@NgModule({
  declarations: [
    ListDmComponent,
    ConsultDmComponent,
    DmComponent,
    EncoursDmComponent
  ],
  imports: [
    CommonModule,
    DmRoutingModule
  ]
})
export class DmModule { }
