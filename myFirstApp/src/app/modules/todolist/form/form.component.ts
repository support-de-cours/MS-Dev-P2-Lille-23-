import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'todolist-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public item: string = "";

  constructor(
    private service: ShareService
  ){}

  ngOnInit(): void {
  }


  public addItem(): void
  {
    this.item = this.item.trim();

    if (!this.item.length)
      return;
    
    // this.items.push( this.item )
    this.service.addItem(this.item);

    this.item = "";
  }
}
