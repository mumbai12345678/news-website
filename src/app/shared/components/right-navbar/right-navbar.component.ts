import { Component, OnInit } from '@angular/core';
export interface Topic {
  name: string;
}
@Component({
  selector: 'app-right-navbar',
  templateUrl: './right-navbar.component.html',
  styleUrls: ['./right-navbar.component.css']
})
 
export class RightNavbarComponent implements OnInit {
  
  topics:  Topic[] = [
    {name: 'न्यायालय समाचार'},
    {name: 'क्राइम-कोर्ट न्यूज़'},
    {name: 'वित्तीय धोखाधड़ी'},
    {name: 'गैंगस्टर'},
    {name: 'साइबर हमला'},
    {name: 'ऑनलाइन धोखाधड़ी'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
