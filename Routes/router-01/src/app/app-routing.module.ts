import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [

  // Homepage
  {
    path: 'homepage', // site.com/homepage
    component: HomepageComponent
  },

  // Contact
  {
    path: 'contact', // site.com/contact
    component: ContactComponent
  },

  // About
  {
    path: 'about', // site.com/about
    component: AboutComponent
  },

  // Default Route
  {
    path: '', // site.com/
    pathMatch: 'full',
    redirectTo: '/homepage' // redirige vers site.com/homepage
  },

  // Wildcard route / Not Found / 404
  {
    path: '**',
    // component: NotFoundComponent
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
