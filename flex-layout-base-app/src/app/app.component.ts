import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/shared/components/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'Aplicação Base';
  teste: boolean;

  constructor(private router: Router) { 
  }
  
  ngOnInit() {
    //this.router.navigate(['/home']);
    this.router.navigate(['/login']);
  }
}
