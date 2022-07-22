import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email; // : string ;
  webpage : string;
  hobbies : string[];

  constructor(){

    console.log("El constructor está trabajando");
      this.name = "Omar Romero Chipana";
      this.email = "oromero@unsa.edu.pe";
      this.webpage = "http://www.unsa.edu.pe";
      this.hobbies = ["Futbol", "Programación", "Netflix"];
  }

  showhobbies(){

    return true;
  }
}
