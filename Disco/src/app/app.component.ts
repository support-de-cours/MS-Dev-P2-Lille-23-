import { Component } from '@angular/core';
import { AlbumService } from './pages/album/services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private albumService: AlbumService
  ){
    // this.albumService.getAlbumsFromApi()
  }
}
