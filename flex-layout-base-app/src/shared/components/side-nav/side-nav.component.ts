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
  @ViewChild('sidenav') sidenav:any;

  isMobile: Boolean;

  menuItems = [
    { icone: 'home', nome: 'Home', link: '/' },
    { icone: 'shopping_cart', nome: 'Lista de compras', link: '/compras' },
    { icone: 'assignment', nome: 'Tarefas da semana', link: '/tarefas' },
    { icone: 'hearing', nome: 'Ouvidoria', link: '/ouvidoria' }
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
