import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  topNavData:any;
  

  constructor( private data:CommonService) {
    
   }

  ngOnInit(): void {
    this.data.getTopNavData().subscribe(res=>{
      this.topNavData=res;
      // console.log(this.date)
       
    });
    
   

  }

  
  // ========================current date calculation========
 
date = new Date();
formattedDate = `${this.date.toLocaleString('en-US', { month: 'long' })} ${String(this.date.getDate()).padStart(2, '0')}, ${this.date.getFullYear()}`;

// ================================
}
