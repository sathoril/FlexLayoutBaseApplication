import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  
  isMobile: Boolean;
  diameter: Number = 100;

  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver
    .observe([ Breakpoints.Small, Breakpoints.HandsetPortrait ])
    .subscribe((state: BreakpointState) => {
      this.isMobile = state.matches;

      if(!this.isMobile) {
        this.diameter = 150;
      } 
    });
  }

  ngOnInit() {
  }

}
