import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalkulacka'
}

function vlozit(num: any){
  document.forms.vysledek.value = document.forms.vysledek.value+num
}
//Vubec nevim co zde psat dal :)
