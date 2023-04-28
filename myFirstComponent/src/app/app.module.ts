import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { MyThirdCmpComponent } from './my-third-cmp/my-third-cmp.component';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

@NgModule({
  declarations: [
    AppComponent,
    SayHelloComponent,
    MySecondComponentComponent,
    MyThirdCmpComponent,
  ],
  imports: [
    BrowserModule,
    MyFirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
