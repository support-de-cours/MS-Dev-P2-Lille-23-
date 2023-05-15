import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  private _album: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient
  ){}




  getAlbumsFromApi(): void
  {
    this.httpClient
      .get<any>(`albums`)
      .subscribe((response: any) => {
        this._albums.next(response)
      });
  }

  getAlbumById(id: number): void
  {
    // Reset de _album
    this._album.next({});

    // Requete
    this.httpClient
      .get<any>(`albums/${id}`)
      .subscribe((response: any) => {
        this._album.next(response) // Modification de _album
      });
  }



  get albums(): BehaviorSubject<any>
  {
    return this._albums;
  }

  get album(): BehaviorSubject<any>
  {
    return this._album;
  }
}
