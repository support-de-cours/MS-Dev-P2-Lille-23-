import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private _items = new BehaviorSubject<string[]>([]);

  get items(): BehaviorSubject<string[]>
  {
    return this._items;
  }

  addItem(item: string): void
  {
    this._items.next(
      [
        ...this._items.value, 
        item
      ]
    );
  }
}
