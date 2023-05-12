// Note: 1. Création du module "core" (shell: ng g m core)
// Note: 6. Import et Export du composant "HeaderComponent"
// Note: 8. Import et Export du composant "FooterComponent"

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Note: 26. Import du module "RouterModule" permettant a Angular de reconnaitre les "routerLink" dans le "HeaderComponent"
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
