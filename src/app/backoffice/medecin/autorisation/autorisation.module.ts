import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAutorisationComponent } from './add-autorisation/add-autorisation.component';
import { ListAutorisationComponent } from './list-autorisation/list-autorisation.component';
import { DetailsAutorisationComponent } from './details-autorisation/details-autorisation.component';
import { AutorisationComponent } from './autorisation/autorisation.component';



@NgModule({
  declarations: [
    AddAutorisationComponent,
    ListAutorisationComponent,
    DetailsAutorisationComponent,
    AutorisationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutorisationModule { }
