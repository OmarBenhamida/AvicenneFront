import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RhComponent } from './rh.component';

const routes: Routes = [

{
  path: '',
  component: RhComponent,
  children: [
  // { path: 'personnel', loadChildren: './personnel/personnel.module#PersonnelModule' },
  { path: 'personnel', loadChildren: () => import('./personel/personel.module').then(m => m.PersonelModule), },
  { path: 'absence', loadChildren: () => import('./absence/absence.module').then(m => m.AbsenceModule), },
  { path: 'retard', loadChildren: () => import('./retard/retard.module').then(m => m.RetardModule), },
  { path: 'attestationtravail', loadChildren: () => import('./attestationtravail/attestationtravail.module').then(m => m.AttestationtravailModule), },
  { path: 'conge', loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule), },
  { path: 'contrat', loadChildren: () => import('./contrat/contrat.module').then(m => m.ContratModule), },
  { path: 'demande', loadChildren: () => import('./demande/demande.module').then(m => m.DemandeModule), },
  { path: 'fichepaie', loadChildren: () => import('./fichepaie/fichepaie.module').then(m => m.FichepaieModule), },
  { path: 'poste', loadChildren: () => import('./poste/poste.module').then(m => m.PosteModule), },
  //{ path: 'home', loadChildren: () => import('./rh.module').then(m => m.RhModule), },
  { path: 'accueil', component: AccueilComponent },


],
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
