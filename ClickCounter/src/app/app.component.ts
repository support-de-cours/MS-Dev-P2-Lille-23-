import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public counter: number = 0;

  public less(): void
  {
    if (this.counter <= -10) return;
    this.counter--;
  }

  public more(): void
  {
    if (this.counter >= 10) return;
    this.counter++;
  }

}
