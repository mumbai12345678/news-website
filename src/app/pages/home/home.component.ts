import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsTitle="बड़ी खबरें"
  autherName=" Parivesh Gupta";
  date :Date= new Date();
    sub_headnews:any=[{
    titile:"56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव! "
   }]
  


  constructor() { }

  ngOnInit(): void {
  }

}
