import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: string[] = [];
  public newItem: string = "";

  public addItem()
  {
    this.newItem = this.newItem.trim();

    if (this.newItem.length <= 0)
      return;
    
    this.items.unshift( this.newItem );

    this.newItem = "";
  }

  public strikeItem(event: any)
  {
    event.target.parentNode.querySelector('span').classList.toggle("strike");
  }
}
