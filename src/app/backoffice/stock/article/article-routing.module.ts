import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { ListAtricleComponent } from './list-atricle/list-atricle.component';




const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      { path: 'add', component: AddArticleComponent },
      { path: 'details', component: DetailsArticleComponent },
      { path: 'list', component: ListAtricleComponent },

      //{ path: 'accueil', component: ArticleComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
