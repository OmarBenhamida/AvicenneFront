import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {

  path: '',
        component: BackofficeComponent,
        children: [
          { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'personnel', loadChildren: () => import('./personnel/personnel.module').then(m => m.PersonnelModule), },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule), },

  { path: 'comptabilite', loadChildren: () => import('./comptabilite/comptabilite.module').then(m => m.ComptabiliteModule), },
  { path: 'laboratoire', loadChildren: () => import('./laboratoire/laboratoire.module').then(m => m.LaboratoireModule), },
  { path: 'medecin', loadChildren: () => import('./medecin/medecin.module').then(m => m.MedecinModule), },
  { path: 'rh', loadChildren: () => import('./rh/rh.module').then(m => m.RhModule), },
  { path: 'secretaire', loadChildren: () => import('./secretaire/secretaire.module').then(m => m.SecretaireModule), },
  { path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule), },

  { path: 'dashboard', loadChildren: () => import('./backoffice.module').then(m => m.BackofficeModule), },

  { path: 'menu', component: MenuComponent },


  // tslint:disable-next-line:max-line-length
  //{ path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurModule), canActivate: [MyGuard]},
  // tslint:disable-next-line:max-line-length
  //{ path: 'utilisateur', loadChildren: () => import('./utilisateur/utilisateur.module').then(m => m.UtilisateurModule), canActivate: [MyGuard]},

],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
