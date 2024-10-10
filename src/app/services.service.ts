import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
jsonData={
  header:{
    icon:{
      home: 'fa-solid fa-house menu-icon',
      video:'fas fa-play-circle',
      stories:'fas fa-newspaper'
  
  
    },
    title:{
      home:'होम',
      video:'वीडियो',
      visualStories:'विज़ुअल स्टोरीज़'
      
    }
  }

}

}
