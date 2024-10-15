import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
 



@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    TopNavComponent,
    LeftNavbarComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TopNavComponent,
    LeftNavbarComponent
   
  ]

})
export class SharedModule { }
