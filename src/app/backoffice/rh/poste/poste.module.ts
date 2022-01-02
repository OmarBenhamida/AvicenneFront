import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { AffectationComponent } from './affectation/affectation.component';
import { PosteComponent } from './poste.component';
import { PosteRoutingModule } from './poste-routing.module';



@NgModule({
  declarations: [
    AddPostComponent,
    AffectationComponent,
    PosteComponent
  ],
  imports: [
    CommonModule,
    PosteRoutingModule
  ]
})
export class PosteModule { }
