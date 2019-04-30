import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NavigationService } from 'src/shared/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Allows for the password to be revealed or not
  hide = true;

  // It changes to true if the device is a Mobile device and sets false if the device is a Desktop
  isMobile: Boolean;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private navigationService: NavigationService) { 

    this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.HandsetPortrait ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;
    });

    this.navigationService.hide();
  }

  ngOnInit() {
  }

  loginUser() {
    this.router.navigate(['/home']);
  }
}
