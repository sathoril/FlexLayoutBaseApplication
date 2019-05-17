import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit { 
  @ViewChild('sidenav') sidenav:any;

  isMobile: Boolean;
  profilePicture: String = '../assets/img/user-picture.jpeg';
  nome: String = 'sathoril'

  mode: any;
  opened:any;
  conteudo: any;
  
  menuItems = [
    { icone: 'home', nome: 'Home', link: '/' }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {
    this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.HandsetPortrait ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;      
      this.setSideNavResponsiveBehaviour();
    });
  }

  ngOnInit() {
    this.setSideNavResponsiveBehaviour();
  }

  openSidenav() {
    this.sidenav.toggle();
  }

  logoutUser() {
    this.router.navigate(['/login']);
  }

  private setSideNavResponsiveBehaviour() {
    // Sets the behaviour of the SideNav Component based on if its Mobile or not
    if(this.isMobile) {
      this.opened = false;
      this.mode = 'over';
    }
    else {
      this.opened = true;
      this.mode = 'side';
    }
  }
}
