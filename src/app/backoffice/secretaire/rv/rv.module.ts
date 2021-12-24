import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RvComponent } from './rv.component';
import { ListRvComponent } from './list-rv/list-rv.component';
import { AddRvComponent } from './add-rv/add-rv.component';
import { DetailsRvComponent } from './details-rv/details-rv.component';



@NgModule({
  declarations: [
    RvComponent,
    ListRvComponent,
    AddRvComponent,
    DetailsRvComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RvModule { }
