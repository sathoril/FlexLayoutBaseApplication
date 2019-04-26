import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/shared/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ Globals ]
})
export class AppComponent implements OnInit{

  title = 'Aplicação Base';

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
