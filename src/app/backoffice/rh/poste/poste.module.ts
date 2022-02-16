import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { AffectationComponent } from './affectation/affectation.component';
import { PosteComponent } from './poste.component';
import { PosteRoutingModule } from './poste-routing.module';
import { ListePostComponent } from './liste-post/liste-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListAffectationComponent } from './list-affectation/list-affectation.component';



@NgModule({
  declarations: [
    AddPostComponent,
    AffectationComponent,
    PosteComponent,
    ListePostComponent,
    ListAffectationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    PosteRoutingModule
  ]
})
export class PosteModule { }
