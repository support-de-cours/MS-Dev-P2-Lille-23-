import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Section ngIF
  // --

  public isActive: boolean = true;
  public changeIsActive():void
  {
    this.isActive = !this.isActive;
  }


  // Section ngFor
  // --

  public fruits: string[] = [
    "Pommes",
    'Poires',
    "Bananes",
    "Kiwi",
  ];


  // Type de données
  // --

  // Chaines
  public myFirstStr: string = "This is a string";
  public mySecondStr: string = 'This is a string';
  public myThirdStr: string|null = null;
  public myFourthStr!: string;

  // Nombres
  public myNum: number = 42;
  public myNegativeNum: number = -42;
  public myDecimal: number = 5.4;

  // Booléen
  public myFirstBool: boolean = true;
  public mySecondBool: boolean = false;

  // NULL
  public myNull: null = null;

  // Tableau
  public myArray: [] = [];

  // Tableau de chaine
  public myStrArray: string[] = ["str1", 'str2', `str3`];
  public mySecondStrArray: Array<string> = ["str1", 'str2', `str3`];

  // Object
  public myObject: {} = {};

  // Joker
  public myJoker: any;

  // Tableau Joker
  public myFirstJokerArray: any[] = ["str1", 'str2', `str3`, 42, true, [], {}];
  public mySecondJokerArray: Array<any> = ["str1", 'str2', `str3`, 42, true, [], {}];

}
