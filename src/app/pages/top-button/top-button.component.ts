import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShow: boolean = false;
topPosToStartShowing = 100; // You can adjust this value to determine when to show the button

// Listen to the window scroll event
@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
  // If user scrolls more than topPosToStartShowing px, show the button
  if (scrollPosition >= this.topPosToStartShowing) {
    this.isShow = true;
  } else {
    this.isShow = false;
  }
}


scrollToTop(){
window.scrollTo({top:0, behavior:'smooth'})
}
 

}
