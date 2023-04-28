import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinComponent } from '../machin/machin.component';



@NgModule({
  declarations: [
    MachinComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MachinComponent
  ]
})
export class MyFirstModuleModule { }
