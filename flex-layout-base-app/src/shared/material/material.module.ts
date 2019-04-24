import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule, 
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
