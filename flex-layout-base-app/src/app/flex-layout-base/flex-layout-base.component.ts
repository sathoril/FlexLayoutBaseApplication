import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flex-layout-base',
  templateUrl: './flex-layout-base.component.html',
  styleUrls: ['./flex-layout-base.component.scss']
})
export class FlexLayoutBaseComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
