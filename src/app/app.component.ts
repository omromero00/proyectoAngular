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
  showhobbies : boolean;

  constructor(){

    console.log("El constructor está trabajando");
      this.name = "Omar Romero Chipana";
      this.email = "oromero@unsa.edu.pe";
      this.webpage = "http://www.unsa.edu.pe";
      this.hobbies = ["Futbol", "Programación", "Netflix"];
      this.showhobbies = false;
  }

  toggleHobbies(){

    this.showhobbies = !this.showhobbies;
  }

  newHobby(hobby : any){

    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
    
  }
   
}
