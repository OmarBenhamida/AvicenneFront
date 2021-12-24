import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { MedecinComponent } from './medecin.component';



@NgModule({
  declarations: [
    AgendaComponent,
    MedecinComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedecinModule { }
