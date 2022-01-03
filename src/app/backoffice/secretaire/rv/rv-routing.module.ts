import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddRvComponent } from './add-rv/add-rv.component';
import { DetailsRvComponent } from './details-rv/details-rv.component';
import { ListRvComponent } from './list-rv/list-rv.component';
import { RvComponent } from './rv.component';







const routes: Routes = [
  {
    path: '',
    component: RvComponent,
    children: [
      { path: 'add', component: AddRvComponent },
      { path: 'details', component: DetailsRvComponent },
      { path: 'list', component: ListRvComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RvRoutingModule {}
