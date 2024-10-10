import { Component, HostListener } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isvisible:boolean=false;
   private currentScroll:number=0

 

      header=[
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
         

      }
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
     

  }
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
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  console.log('Scroll position:', scrollPosition);

  if (scrollPosition >30) {
       
    
this.isvisible=true
  }
  else{
    this.isvisible=false
  }
  
 
}
// scrollUp(){
//   if (this.scrollPosition >30) {
       
    
//     this.isvisible=true
//       }

// }
}
