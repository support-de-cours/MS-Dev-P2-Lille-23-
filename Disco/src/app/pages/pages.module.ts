// Note: 2. Création du module "page" (shell: ng g m core)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Note: 15. Import du module "HomepageModule" 
import { HomepageModule } from './homepage/homepage.module';
// Note: 24. Import du module "AlbumModule"
import { AlbumModule } from './album/album.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule,
    AlbumModule
  ]
})
export class PagesModule { }
