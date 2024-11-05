import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isvisible:boolean=false;
    resSearchToggler:boolean=true;
    Icon:boolean=true;
 
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
   res_nav=[
    {
      icon:'fa-solid fa-house    ',
      title:'होम',
       

    },
    {
      icon:'fas fa-play-circle ',
      title:'पॉलिटिक्स',
      state:'वीडियो',
       

    },
    {
      icon:'fas fa-newspaper ',
      title:'टॉप न्यूज',
       
    
    },
    {
      icon:'fas fa-newspaper ',
      title:' इंवेस्टिगेशन',
       
    },
    {
      icon:'fas fa-newspaper ',
      title:'कोर्ट न्यूज',
 
    },
    {
      icon:'fas fa-newspaper ',
      title:'अनसुलझे केस',
 
    },
    {
      icon:'fas fa-newspaper ',
      title:'इंटरनेशनल',
       
     
    },
    // {
    //   icon:'fas fa-newspaper pe-2',
    //   title:'खबरदार',
       
      
    // }, 


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
isOpen = false; // Track if the sidenav is open or closed

openNav() {
  this.isOpen = true;
}

closeNav() {
  this.isOpen = false;
}


// ==================resnavToggler============
searchToggler(){
  this.resSearchToggler=!this.resSearchToggler;
   this.Icon= !this.Icon;

}

}
