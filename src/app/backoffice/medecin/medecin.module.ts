import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { MedecinComponent } from './medecin.component';
import { MedecinRoutingModule } from './medecin-routing.module';



@NgModule({
  declarations: [
    AgendaComponent,
    MedecinComponent
  ],
  imports: [
    CommonModule,
    MedecinRoutingModule
  ]
})
export class MedecinModule { }
