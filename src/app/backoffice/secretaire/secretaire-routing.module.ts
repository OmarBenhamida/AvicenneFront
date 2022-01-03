import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretaireComponent } from './secretaire.component';



const routes: Routes = [

    {
        path: '',
        component: SecretaireComponent,
        children: [
        { path: 'admission', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule), },
        { path: 'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule), },
        { path: 'operation', loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule), },
        { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule), },
        { path: 'rv', loadChildren: () => import('./rv/rv.module').then(m => m.RvModule), },







      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class SecretaireRoutingModule { }
