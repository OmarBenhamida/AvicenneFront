import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptabiliteComponent } from './comptabilite.component';

const routes: Routes = [

    {
        path: '',
        component: ComptabiliteComponent,
        children: [
        { path: 'facture', loadChildren: () => import('./facture/facture.module').then(m => m.FactureModule), },
        { path: 'paiement', loadChildren: () => import('./paiement/paiement.module').then(m => m.PaiementModule), },
        
        //{ path: 'accueil', component: AccueilComponent },
      
      
      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class ComptabiliteRoutingModule { }
