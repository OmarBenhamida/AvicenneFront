import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
