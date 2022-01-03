import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { AdmissionComponent } from './admission.component';
import { DetaitlsAdmissionComponent } from './detaitls-admission/detaitls-admission.component';
import { AddAdmissionUrgComponent } from './add-admission-urg/add-admission-urg.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';
import { ListAdmissionComponent } from './list-admission/list-admission.component';





const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent,
    children: [
      { path: 'add', component: AddAdmissionComponent },
      { path: 'addUrg', component: AddAdmissionUrgComponent },
      { path: 'edit', component:EditAdmissionComponent },
      { path: 'details', component: DetaitlsAdmissionComponent },
      { path: 'list', component: ListAdmissionComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionRoutingModule {}
