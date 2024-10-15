import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
