import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ShowComponent } from './show/show.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    ShowComponent
  ]
})
export class TodolistModule { }
