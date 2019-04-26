import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/shared/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globals: Globals) {
   }

  ngOnInit() {
    this.globals.showNavigatioMenu = false;
    console.log("Home" + this.globals.showNavigatioMenu)
  }

}
