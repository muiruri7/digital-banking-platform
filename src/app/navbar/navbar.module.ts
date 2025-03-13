import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
