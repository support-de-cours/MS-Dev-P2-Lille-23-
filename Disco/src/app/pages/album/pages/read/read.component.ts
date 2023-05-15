import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  private id: number = 0;
  public album: any;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ){
    // Recupération du parametre ID de l'url
    // + Convertion de l'ID en type Number
    let id = Number(this.route.snapshot.paramMap.get('id'));

    // Controle de la valeur de l'ID et affectation à la propriété ID
    if (id && id > 0) this.id = id;
  }
  
  ngOnInit(): void {
    const url = `http://localhost:3000/albums/${this.id}`;
    
    this.httpClient
      .get( url )
      .subscribe(response => {

        this.album = response
        
      });
  }
}
