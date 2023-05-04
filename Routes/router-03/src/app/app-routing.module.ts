import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [


  // site.com/
  // site.com/homepage

  // site.com/books
  // site.com/books/create
  // site.com/books/42
  // site.com/books/42/edit
  // site.com/books/42/delete
  
  // /books
  //  |--.
  //  |--create
  //  |--42
  //  |  |--.
  //  |  |--edit
  //  |  |--delete



  // Homepage
  // site.com/homepage
  {
    path: 'homepage',
    component: HomepageComponent
  },






  // // Liste des livres
  // // site.com/books
  // {
  //   path: 'books',
  //   component: IndexComponent
  // },

  // // Création d'un livre
  // // site.com/books/create
  // {
  //   path: 'books/create',
  //   component: CreateComponent
  // },

  // // Détails d'un livre
  // // site.com/books/42
  // // :id
  // {
  //   path: 'books/:id',
  //   component: DetailComponent    
  // },

  // // Modification d'un livre
  // // site.com/books/42/edit
  // {
  //   path: 'books/:id/edit',
  //   component: UpdateComponent
  // },

  // // Suppression d'un livre
  // // site.com/books/42/delete
  // {
  //   path: 'books/:id/delete',
  //   component: DeleteComponent
  // },







  // Liste des livres
  // site.com/books
  {
    path: 'books',
    children: [
      {
        path: '', // site.com/books
        component: IndexComponent
      },
      {
        path: 'create', // site.com/books/create
        component: CreateComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',  // site.com/books/42
            component: DetailComponent
          },
          {
            path: 'edit',  // site.com/books/42/edit
            component: UpdateComponent
          },
          {
            path: 'delete',  // site.com/books/42/delete
            component: DeleteComponent
          }
        ]
      }
    ]
  },








  // Default route
  // site.com/
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },

  // Wildcard route
  // site.com/yetzauyeta
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
