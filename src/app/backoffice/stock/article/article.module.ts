import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { EncoursArticleComponent } from './encours-article/encours-article.component';
import { ListAtricleComponent } from './list-atricle/list-atricle.component';



@NgModule({
  declarations: [
    AddArticleComponent,
    ArticleComponent,
    EncoursArticleComponent,
    DetailsArticleComponent,
    ListAtricleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
