import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalkulacka'
  vysledek: any;
  jedna(){
    console.log("TEST");
      this.vysledek = 1;
  }
  dva(){
    console.log("TEST2");
    this.vysledek = 2;
  }
}

function vlozit(num: any){
  //document.formular.tabulka.value = document.formular.tabulka.value+nu
  /*if(num==1){
    console.log("TEST");
  }*/
}
//Vubec nevim co zde psat dal :)
