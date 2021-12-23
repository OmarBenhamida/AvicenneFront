import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListAtricleComponent } from './list-atricle/list-atricle.component';
import { ArticleComponent } from './article.component';



@NgModule({
  declarations: [
    AddArticleComponent,
    ListAtricleComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
