import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  private id: number = 0;
  public album: any;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (id && id > 0) {
      this.id = id;
      this.albumService.getAlbumById( id );
    };
  }
  
  ngOnInit(): void {
    this.albumService.album.subscribe(data => this.album = data);
  }
}
