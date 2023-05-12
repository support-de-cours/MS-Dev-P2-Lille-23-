// Note: 31.a. Import du service HttpClient
import { HttpClient } from '@angular/common/http';

// Note: 32.a. Import de la classe "OnInit"
import { Component, OnInit } from '@angular/core';

// Note: 33. (A MODIFIER) définition d'une constante contenant l'adresse de l'api
const url = "http://localhost:3000/albums";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
// Note: 32.b. Implementation de la classe "OnInit"
export class IndexComponent implements OnInit {

  // Note: 27. Création du tableau de stockage de la liste des albums
  public albums!: any;

  // Note: 31.b. Instance du service HttpClient
  constructor(
    private httpClient: HttpClient
  ){}

  // Note: 32.c. Utilisation de la methode "ngOnInit" de la classe "OnInit"
    ngOnInit(): void {
      
      // Note: 34.a. Utilisation du service HttpClient pour contacter l'API
      this.httpClient
        // Note: 34.b. Préparation de l'appel de l'API
        .get( url )
        // Note: 34.c. Souscription a la réponse de l'API
        .subscribe(data => {
          this.albums = data
        });
    }
}
