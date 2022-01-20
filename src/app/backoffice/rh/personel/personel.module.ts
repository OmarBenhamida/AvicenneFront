import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { DetailsPersonnelComponent } from './details-personnel/details-personnel.component';
import { EditPersonnelComponent } from './edit-personnel/edit-personnel.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { PersonelComponent } from './personel.component';
import { PersonelRoutingModule } from './personel-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AddPersonnelComponent,
    DetailsPersonnelComponent,
    EditPersonnelComponent,
    ListPersonnelComponent,
    PersonelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PersonelRoutingModule
  ]
})
export class PersonelModule { }
