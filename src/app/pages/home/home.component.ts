import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainContent:any;
// Component TypeScript file
slides = [
  {
    image: 'https://example.com/image1.jpg',
    title: 'Slide 1',
    description: 'Description 1',
    link: '#'
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Slide 2',
    description: 'Description 2',
    link: '#'
  },
  {
    image: 'https://example.com/image3.jpg',
    title: 'Slide 3',
    description: 'Description 3',
    link: '#'
  },
  {
    image: 'https://example.com/image4.jpg',
    title: 'Slide 4',
    description: 'Description 4',
    link: '#'
  },
  {
    image: 'https://example.com/image5.jpg',
    title: 'Slide 5',
    description: 'Description 5',
    link: '#'
  }
  // Add more slides as needed
];

currentIndex = 0;
slidesToShow = 3; // Number of images visible at a time

getTransformStyle(): string {
  return `translateX(-${this.currentIndex * (100 / this.slidesToShow)}%)`;
}

prevSlide(): void {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

nextSlide(): void {
  if (this.currentIndex < this.slides.length - this.slidesToShow) {
    this.currentIndex++;
  }
}
 
  // ======================
 
  newsTitle="बड़ी खबरें"
  autherName=" Parivesh Gupta";
  date :Date= new Date();
    sub_headnews:any=[{
    titile:"56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव! "
   }]

   news: any[] = [
    { 
      type: "news",
      newsTitle: "बड़ी खबरें",
      headlineImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/6700e038e0c48-nia-dsp-arrested-054407824-16x9.jpg?size=360:203",
      headlineVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202410/66fe5071cca1e-punjab-viral-video-030608830-16x9.jpg?size=360:203",
      headlineContent: "NIA का रिश्वतखोर डीएसपी, 20 लाख कैश लेते CBI ने पकड़ा, NIA का DSP बोला- AK-47 रखवाकर अरेस्ट करवा दूंगा",
      subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
      subNewsVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202407/66a0c21093b79-crime-news-245751616-16x9.png?size=280:180",
      subNewsContent: "  56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
      autherName:" Parivesh Gupta",
     
      
    }, 
    
    
    // {
    //   type: "advertisement",
    //   adImgUrl: "https://example.com/path-to-your-advertisement.jpg",
      
    // },
    
  ];


  relatedNews:any[]=[
    {subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
      subNewsVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202407/66a0c21093b79-crime-news-245751616-16x9.png?size=280:180",
      subNewsContent: "  सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी कासालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी कासालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
      autherName:" Parivesh Gupta"},
      {subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
        subNewsVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202407/66a0c21093b79-crime-news-245751616-16x9.png?size=280:180",
        subNewsContent: " 56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
        autherName:" Parivesh Gupta"},
        {subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
          subNewsVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202407/66a0c21093b79-crime-news-245751616-16x9.png?size=280:180",
          subNewsContent: "56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
          autherName:" Parivesh Gupta"},
          {subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            subNewsVideoUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/video/202407/66a0c21093b79-crime-news-245751616-16x9.png?size=280:180",
            subNewsContent: "56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
            autherName:" Parivesh Gupta"}
  ]

  visualStories:any[]=[{
    imgUrl:"https://cf-img-a-in.tosshub.com/sites/visualstory/crimetak/uploads/2024/09/cropped-fgjgfjgj.jpg?size=*:900",
    cardTitle:"ट्रेंडिंग",
    cardText:"Coldplay कॉन्सर्ट की टिकट को लेकर India में धांधली?"
  },
  {
    imgUrl:"https://cf-img-a-in.tosshub.com/sites/visualstory/crimetak/uploads/2024/09/cropped-hdguihsgih.jpg?size=*:900",
    cardTitle:"ट्रेंडिंग",
    cardText:"Coldplay कॉन्सर्ट की टिकट को लेकर India में धांधली?"
  },
  {
    imgUrl:"https://cf-img-a-in.tosshub.com/sites/visualstory/crimetak/uploads/2024/09/cropped-fgjgfjgj.jpg?size=*:900",
    cardTitle:"ट्रेंडिंग",
    cardText:"Coldplay कॉन्सर्ट की टिकट को लेकर India में धांधली?"
  },
  {
    imgUrl:"https://cf-img-a-in.tosshub.com/sites/visualstory/crimetak/uploads/2024/09/cropped-jsdijgigj.jpg?size=*:900",
    cardTitle:"ट्रेंडिंग",
    cardText:"Coldplay कॉन्सर्ट की टिकट को लेकर India में धांधली?"
  }
]


// ====================


  constructor( private homeData:CommonService) {


   }

  ngOnInit(): void {
    const limit = 6
    this.homeData.getHomeData(limit).subscribe(res=>{
      delete res.category_data["होम"];
      console.log('1')
      this.mainContent=res;
      console.log('home',this.mainContent)
    })
  }
  
  

}
