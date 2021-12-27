import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';

const routes: Routes = [

    {
        path: '',
        component: StockComponent,
        children: [
        { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule), },
        { path: 'operation', loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule), },

        //{ path: 'accueil', component: AccueilComponent },


      ],
      },
      ];
      @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
      })
export class StockRoutingModule { }
