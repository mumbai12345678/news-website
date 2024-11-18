import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-categorized-news',
  templateUrl: './categorized-news.component.html',
  styleUrls: ['./categorized-news.component.css']
})
export class CategorizedNewsComponent implements OnInit {
  categoryName:any;  
  subcategoryName: any ;
  cat_data:any

  constructor( private route:ActivatedRoute, private service:CommonService) { 
    
  }

  ngOnInit(): void {
        this.getParams();
        
  }
  // ============categories wise data=============
  categoryData(){
    this.service.dataByCategory( this.categoryName).subscribe(res=>{
 this.cat_data=res;
 console.log(" welcome",this.cat_data)
    })
  } 
  // ====================params======
  getParams(){
    this.route.paramMap.subscribe((parm:ParamMap)=>{
      this.categoryName=parm.get('category');
      this. subcategoryName=parm.get('subcategory');
      console.log('cate',this.categoryName);
      console.log('subcate',this.categoryName);
      this.categoryData();
    })

  }
   
  // ===============
}
