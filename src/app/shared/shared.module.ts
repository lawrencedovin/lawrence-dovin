import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    // ANGULAR MODULES
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
