import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Value of data binding";
  public imgUrl: string = "https://picsum.photos/200/300";
  public myEventMethod(): void 
  {
    alert("Event is trigged");
  }

  public firstname: string = "Bob";
}
