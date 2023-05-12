import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Note: 14 Définition de la route "default"
const routes: Routes = [
  // Default Route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
