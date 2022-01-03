import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { DetailsOperationComponent } from './details-operation/details-operation.component';
import { ListOperationComponent } from './list-operation/list-operation.component';
import { OperationComponent } from './operation.component';





const routes: Routes = [
  {
    path: '',
    component: OperationComponent,
    children: [
      { path: 'add', component: AddOperationComponent },
      { path: 'details', component: DetailsOperationComponent },
      { path: 'list', component: ListOperationComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationRoutingModule {}
