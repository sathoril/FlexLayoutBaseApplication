import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
