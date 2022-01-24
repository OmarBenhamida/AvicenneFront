import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetardComponent } from './retard.component';
import { AddRetardComponent } from './add-retard/add-retard.component';
import { DetailsRetardComponent } from './details-retard/details-retard.component';
import { ListRetardComponent } from './list-retard/list-retard.component';
import { RetardRoutingModule } from './retard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RetardComponent,
    AddRetardComponent,
    DetailsRetardComponent,
    ListRetardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RetardRoutingModule
  ]
})
export class RetardModule { }
