import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './operation.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { EditOperationComponent } from './edit-operation/edit-operation.component';
import { ListOperationComponent } from './list-operation/list-operation.component';
import { DetailsOperationComponent } from './details-operation/details-operation.component';
import { OperationRoutingModule } from './operation-routing.module';



@NgModule({
  declarations: [
    OperationComponent,
    AddOperationComponent,
    EditOperationComponent,
    ListOperationComponent,
    DetailsOperationComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
