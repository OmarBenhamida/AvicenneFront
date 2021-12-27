import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaboratoireComponent } from './laboratoire.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [

    {
        path: '',
        component: LaboratoireComponent,
        children: [
        { path: 'analyse', loadChildren: () => import('./analyse/analyse.module').then(m => m.AnalyseModule), },
        { path: 'echantillon', loadChildren: () => import('./echantillon/echantillon.module').then(m => m.EchantillonModule), },

        { path: 'patient', component: PatientComponent },


      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class LaboratoireRoutingModule { }
