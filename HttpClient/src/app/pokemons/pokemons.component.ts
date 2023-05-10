import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons: any[] = [];
  public pokemon2: any = {};

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    // Préparation de la requete sur l'URL
    this.http.get(url)
    
    // Execution de la requete + récupération de la réponse
    .subscribe( (response: any) => {

      // "response" représente le fichier JSON reçu de l'API
      // "results" est une propriété de l'API
      // console.log(response.results)

      this.pokemons = response.results;
      this.pokemon2 = response.results[24];
    } );
  }
}
