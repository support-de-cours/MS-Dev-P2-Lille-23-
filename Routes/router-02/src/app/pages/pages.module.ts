import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import { BookModule } from './book/book.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    HomepageModule,
    BookModule,
    AboutModule,
    ContactModule
  ]
})
export class PagesModule { }
