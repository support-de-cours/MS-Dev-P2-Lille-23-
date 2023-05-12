import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Note: 30.a. Import du module "HttpClientModule"
import { HttpClientModule } from '@angular/common/http'

import { AlbumRoutingModule } from './album-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // Note: 30.b. Injection du module "HttpClientModule" pour que le module Album puisse utiliser les services Http
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
