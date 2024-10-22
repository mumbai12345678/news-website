import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isvisible:boolean=false;
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

  constructor() { }

  ngOnInit(): void {
  }
//   @HostListener('window:scroll', [])
// onWindowScroll(event: Event) {
//   let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  
//   console.log('Scroll position:', scrollPosition);

//   if (scrollPosition >10) {
       
    
// this.isvisible=true
//   }
//   else{
//     this.isvisible=false
//   }
  
 
// }

}
