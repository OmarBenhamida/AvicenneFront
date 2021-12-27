import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonnelComponent } from './personnel.component';


const routes: Routes = [

    {
        path: '',
        component: PersonnelComponent,
        children: [
        { path: 'attestationtravail', loadChildren: () => import('./attestationtravail/attestationtravail.module').then(m => m.AttestationtravailModule), },
        { path: 'conge', loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule), },
        { path: 'fichepaie', loadChildren: () => import('./fichepaie/fichepaie.module').then(m => m.FichepaieModule), },

      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class PersonnelRoutingModule { }
