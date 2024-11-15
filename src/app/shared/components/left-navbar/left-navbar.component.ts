import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit {
  selectedIndex:any= -1;
   leftNavData:any;
   category: any;
   categoryData:any;

  constructor( private service:CommonService) { }

  ngOnInit( ): void { 
this.service.getLeftNavData().subscribe(res=>{
this.leftNavData=res;
console.log( "hey",this.leftNavData)
})
  }
    
 
 
  
getdata(){
   
  this.service.Cdata(this.category).subscribe((res)=>{
    this.categoryData=res;
  })
}


  selectItem(index: number) {
    this.selectedIndex = index;
  }
}

