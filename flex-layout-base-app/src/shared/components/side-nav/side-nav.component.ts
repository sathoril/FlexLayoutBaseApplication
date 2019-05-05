import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, ViewChild, OnInit} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit { 
  @ViewChild('sidenavMobile') sidenav:any;

  isMobile: Boolean;

  menuItems = [
    { icone: 'home', nome: 'Home', link: '/' }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {

    this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.HandsetPortrait ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
    });
  }

  ngOnInit() {
  }

  openSidenav() {
    this.sidenav.toggle();
  }

  logoutUser() {
    this.router.navigate(['/login']);
  }
}
