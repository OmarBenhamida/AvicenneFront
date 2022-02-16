import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande.component';


const routes: Routes = [

{
  path: '',
  component: DemandeComponent,
  children: [


  // { path: 'personnel', loadChildren: './personnel/personnel.module#PersonnelModule' },
{ path: 'attesttation', loadChildren: () => import('./demande-attestation/demande-attestation.module').then(m => m.DemandeAttestationModule), },
  { path: 'conge', loadChildren: () => import('./demande-conge/demande-conge.module').then(m => m.DemandeCongeModule), },
  { path: 'fichepaie', loadChildren: () => import('./demande-fichepaie/demande-fichepaie.module').then(m => m.DemandeFichepaieModule), },
  


],
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeRoutingModule { }
