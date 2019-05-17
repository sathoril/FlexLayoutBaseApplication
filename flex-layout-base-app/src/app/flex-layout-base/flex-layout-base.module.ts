import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutBaseComponent } from './flex-layout-base.component';
import { MaterialModule } from '../../shared/material/material.module';
import { NavigationComponent } from 'src/shared/components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FlexLayoutBaseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ]
})

export class FlexLayoutBaseModule { }
