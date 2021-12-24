import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionComponent } from './admission.component';
import { ListAdmissionComponent } from './list-admission/list-admission.component';
import { AddAdmissionComponent } from './add-admission/add-admission.component';
import { AddAdmissionUrgComponent } from './add-admission-urg/add-admission-urg.component';
import { DetaitlsAdmissionComponent } from './detaitls-admission/detaitls-admission.component';
import { EditAdmissionComponent } from './edit-admission/edit-admission.component';



@NgModule({
  declarations: [
    AdmissionComponent,
    ListAdmissionComponent,
    AddAdmissionComponent,
    AddAdmissionUrgComponent,
    DetaitlsAdmissionComponent,
    EditAdmissionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdmissionModule { }
