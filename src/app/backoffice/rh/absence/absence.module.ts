import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbsenceComponent } from './absence.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsenceRoutingModule } from './absence-routing.module';
import { AddAbsenceComponent } from './add-absence/add-absence.component';
import { DetailsAbsenceComponent } from './details-absence/details-absence.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';



@NgModule({
  declarations: [
    AbsenceComponent,
    AddAbsenceComponent,
    DetailsAbsenceComponent,
    ListAbsenceComponent

  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AbsenceRoutingModule
  ]
})
export class AbsenceModule { }
