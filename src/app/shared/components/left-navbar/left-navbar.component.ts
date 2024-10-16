import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {
  selectedIndex:any= -1;

  constructor() { }

  ngOnInit(): void { }
  

  headers = [
    { icon: 'fa-solid fa-house menu-icon pe-2', title: 'होम' },
    { icon: 'fas fa-play-circle pe-2', title: 'वीडियो' },
    { icon: 'fas fa-newspaper pe-2', title: 'विज़ुअल स्टोरीज़' },
    { icon: 'fa-solid fa-house menu-icon pe-2', title: 'होम' },
    { icon: 'fas fa-play-circle pe-2', title: 'राज्य', id: '5' },
    { icon: 'fas fa-newspaper pe-2', title: 'विज़ुअल स्टोरीज़' },
    { icon: 'fas fa-newspaper pe-2', title: 'विज़ुअल स्टोरीज़' },
    { icon: 'fas fa-play-circle pe-2', title: 'वीडियो' },
    { icon: 'fas fa-play-circle pe-2', title: 'वीडियो' },
  
    

  ];

  states = [
    'आंध्र प्रदेश', 'अरुणाचल प्रदेश', 'असम', 'बिहार', 'छत्तीसगढ़', 'गोवा', 'गुजरात', 
    'हरियाणा', 'हिमाचल प्रदेश', 'झारखंड', 'कर्नाटक', 'केरल', 'मध्य प्रदेश', 
    'महाराष्ट्र', 'मणिपुर', 'मेघालय', 'मिज़ोरम', 'नागालैंड', 'ओड़ीशा', 'पंजाब', 
    'राजस्थान', 'सिक्किम', 'तमिलनाडु', 'तेलंगाना', 'त्रिपुरा', 'उत्तराखंड', 
    'उत्तर प्रदेश', 'पश्चिम बंगाल'
  ];
  



  selectItem(index: number) {
    this.selectedIndex = index;
  }
}

