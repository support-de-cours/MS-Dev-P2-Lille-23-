import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Note: 19. Import du composant "IndexComponent" du module "Album"
// Note: 20. Import du composant "CreateComponent" du module "Album"
// Note: 21. Import du composant "ReadComponent" du module "Album"
// Note: 22. Import du composant "UpdateComponent" du module "Album"
// Note: 23. Import du composant "DeleteComponent" du module "Album"
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';


// ==> site.com/albums
// ==> site.com/album/create
// ==> site.com/album/42
// ==> site.com/album/42/edit
// ==> site.com/album/42/delete

// ==> site.com/x
// ==> site.com/y
// ==> site.com/y/i
// ==> site.com/y/i/j
// ==> site.com/y/i/j


// Note: 18. Définition des routes du module "Album"
const routes: Routes = [
  // Index (liste des albums)
  {
    path: 'albums',                                                             // ==> site.com/albums
    component: IndexComponent
  },

  {
    path: 'album',                                                              // ==> site.com/album
    children: [
      
      // Create (Création d'un album)
      {
        path: '',                                                               // ==> site.com/album
        component: CreateComponent
      },

      {
        path: ':id',                                                            // ==> site.com/album/42
        children: [
          
          // Read (Detail d'un album)
          {
            path: '',                                                           // ==> site.com/album/42
            component: ReadComponent
          },
          
          // Update (Modification d'un album)
          {
            path: 'edit',                                                       // ==> site.com/album/42/edit
            component: UpdateComponent
          },

          // Delete (Suppression d'un album)
          {
            path: 'delete',                                                     // ==> site.com/album/42/delete
            component: DeleteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
