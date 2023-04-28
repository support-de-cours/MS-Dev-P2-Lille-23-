import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'todolist-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  public items: string[] = [];

  constructor(
    private service: ShareService
  ){}

  ngOnInit(): void {
    this.service.items.subscribe(data => this.items = data);
  }
}
