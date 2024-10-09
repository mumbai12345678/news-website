import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
   
  ]

})
export class SharedModule { }
