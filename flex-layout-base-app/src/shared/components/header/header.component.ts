import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  // It changes to true if the device is a Mobile device and sets false if the device is a Desktop
  isMobile: Boolean;

  //public hideNavigationMenu = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.HandsetPortrait ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
    });

  }

  ngOnInit() {
  }

  logoutUser() {
    this.router.navigate(['/login']);
  }
}