import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PosteComponent } from './poste.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AffectationComponent } from './affectation/affectation.component';
import { ListePostComponent } from './liste-post/liste-post.component';




const routes: Routes = [
  {
    path: '',
    component: PosteComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddPostComponent },
      { path: 'affectation', component: AffectationComponent },
      { path: 'list', component: ListePostComponent },


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosteRoutingModule {}

