import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightNavbarComponent } from './components/right-navbar/right-navbar.component';
import { TopButtonComponent } from '../pages/top-button/top-button.component';
import { RouterModule } from '@angular/router';
 
 



@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    TopNavComponent,
    LeftNavbarComponent,
    RightNavbarComponent,
    TopButtonComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TopNavComponent,
    LeftNavbarComponent,
    RightNavbarComponent,
    HttpClientModule
     
   
  ]

})
export class SharedModule { }
