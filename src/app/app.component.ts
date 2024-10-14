import { Component, HostListener } from '@angular/core';
import { NgForOf , } from '@angular/common';
import { ServicesService } from './services.service';
import {MatChipInputEvent} from '@angular/material/chips';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Topic {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  topics:  Topic[] = [
    {name: 'न्यायालय समाचार'},
    {name: 'क्राइम-कोर्ट न्यूज़'},
    {name: 'वित्तीय धोखाधड़ी'},
    {name: 'गैंगस्टर'},
    {name: 'साइबर हमला'},
    {name: 'ऑनलाइन धोखाधड़ी'},
  ];

  

  isvisible:boolean=false;
   private currentScroll:number=0

 

      headers=[
      {
        icon:'fa-solid fa-house menu-icon pe-2',
        title:'होम',
         

      },
      {
        icon:'fas fa-play-circle pe-2',
        title:'वीडियो',
        state:'वीडियो',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
      {
        icon:'fa-solid fa-house menu-icon pe-2',
        title:'होम',
         

      },
      {
        icon:'fas fa-play-circle pe-2',
        title:'राज्य ',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
      {
        icon:'fa-solid fa-house menu-icon pe-2',
        title:'होम',
         

      },
      {
        icon:'fas fa-play-circle pe-2',
        title:'वीडियो',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
     ]
      header=[
      {
        icon:'fa-solid fa-house menu-icon pe-2',
        title:'होम',
         

      },
      {
        icon:'fas fa-play-circle pe-2',
        title:'वीडियो',
        state:'वीडियो',
         

      },
      {
        icon:'fas fa-newspaper pe-2',
        title:'विज़ुअल स्टोरीज़',
         

      },
    
     ]
     
 leftbar=[ 
  {
    icon:'fa-solid fa-house menu-icon pe-2',
    title:'होम',
     

  },
  {
    icon:'fas fa-play-circle pe-2',
    title:'वीडियो',
     

  },
  {
    icon:'fas fa-newspaper pe-2',
    title:'विज़ुअल स्टोरीज़',
     

  },
 ]


  dynamicData:any={}
  title = 'news-website';
  constructor( private data:ServicesService){
      this.dynamicData=data;
  }
  
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //  this.get();
 }
//  get(){
//   for(let i in  this.header){
//     console.log(i.icon)
//   }
  
//  }
@HostListener('window:scroll', [])
onWindowScroll(event: Event) {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  
  console.log('Scroll position:', scrollPosition);

  if (scrollPosition >30) {
       
    
this.isvisible=true
  }
  else{
    this.isvisible=false
  }
  
 
}
 
 
 
}
