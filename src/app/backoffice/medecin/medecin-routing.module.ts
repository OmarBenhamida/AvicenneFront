import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { MedecinComponent } from './medecin.component';


const routes: Routes = [

    {
        path: '',
        component: MedecinComponent,
        children: [
        { path: 'autorisation', loadChildren: () => import('./autorisation/autorisation.module').then(m => m.AutorisationModule), },
        { path: 'dm', loadChildren: () => import('./dm/dm.module').then(m => m.DmModule), },
        { path: 'garde', loadChildren: () => import('./garde/garde.module').then(m => m.GardeModule), },
        { path: 'prescription', loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule), },



        { path: 'agenda', component: AgendaComponent },



      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class MedecinRoutingModule { }
