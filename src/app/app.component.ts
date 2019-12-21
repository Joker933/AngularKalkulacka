import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalkulacka'
}

function vlozit(num: BigInteger){
  document.formular.tabulka.value = document.formular.tabulka.value+num
}
//Vubec nevim co zde psat dal :)
