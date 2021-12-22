import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhComponent } from './rh.component';
import { RhRoutingModule } from './rh-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [
    RhComponent,
    AccueilComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RhRoutingModule  ]
})
export class RhModule { }
