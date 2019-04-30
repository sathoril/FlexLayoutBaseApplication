import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/shared/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Aplicação Base';

  constructor(private router: Router, private navService: NavigationService) { 
    this.navService.show();
  }
  
  ngOnInit() {
    //this.router.navigate(['/home']);
    this.router.navigate(['/login']);
  }

}
