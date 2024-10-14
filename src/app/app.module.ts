import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { TopButtonComponent } from './pages/top-button/top-button.component';

 
 
 

@NgModule({
  declarations: [
   
    AppComponent,
    HomeComponent,
    TopButtonComponent,

    
  
  ],
  imports: [ RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
