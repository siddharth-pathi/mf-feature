import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mf-feature';

  constructor() {
    console.log(localStorage.getItem('selectedItems'));
  }

}
