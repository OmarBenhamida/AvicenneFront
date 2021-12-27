import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAutorisationComponent } from './add-autorisation/add-autorisation.component';
import { ListAutorisationComponent } from './list-autorisation/list-autorisation.component';
import { EncoursAutorisationComponent } from './encours-autorisation/encours-autorisation.component';
import { AutorisationRoutingModule } from './autorisation-routing.module';
import { AutorisationComponent } from './autorisation.component';



@NgModule({
  declarations: [
    AddAutorisationComponent,
    ListAutorisationComponent,
    AutorisationComponent,
    EncoursAutorisationComponent
  ],
  imports: [
    CommonModule,
AutorisationRoutingModule  ]
})
export class AutorisationModule { }
