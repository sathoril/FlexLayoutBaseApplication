import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';

// My Components/Modules
import { FlexLayoutBaseModule } from '../app/flexlayoutbase/flexlayoutbase.module';

import { LoginComponent } from './login/login.component';
import { NavigationService } from 'src/shared/components/navigation/navigation.service';
import { PopupAlertService } from '../shared/components/popup-alert/popup-alert.service';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FlexLayoutBaseModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [PopupAlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
