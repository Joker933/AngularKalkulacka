import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalkulacka'
  vysledek: any = '';
  c:number = 0;
  nula() {
    this.vysledek += 0;
  }
  jedna() {
    this.vysledek += 1;
  }
  dva() {
    this.vysledek += 2;
  }
  tri() {
    this.vysledek += 3;
  }
  ctyri() {
    this.vysledek += 4;
  }
  pet() {
    this.vysledek += 5;
  }
  sest() {
    this.vysledek += 6;
  }
  sedm() {
    this.vysledek += 7;
  }
  osm() {
    this.vysledek += 8;
  }
  devet() {
    this.vysledek += 9;
  }
  plus() {
    this.vysledek += '+';
  }
  minus() {
    this.vysledek += '-';
  }
  krat() {
    this.vysledek += '*';
  }
  deleno() {
    this.vysledek += '/';
  }
  ac() {
    this.vysledek = '';
  }

  vypocet() {
    this.c = this.vysledek;
    console.log(this.c);
    this.vysledek = '';
  }
  

}
//Vubec nevim co zde psat dal :)
