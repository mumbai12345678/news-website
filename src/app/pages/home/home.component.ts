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

   news: any[] = [
    {
      type: "news",
      newsTitle: "बड़ी खबरें",
      headlineImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/6700e038e0c48-nia-dsp-arrested-054407824-16x9.jpg?size=360:203",
      headlineVideoUrl: "https://www.crimetak.in/top-news/video/hooliganism-is-a-sin-police-is-our-father-police-organized-a-parade-of-goons-by-getting-their-heads-shaved-took-out-a-procession-watch-video-3016107-2024-07-24",
      headlineContent: "NIA का रिश्वतखोर डीएसपी, 20 लाख कैश लेते CBI ने पकड़ा, NIA का DSP बोला- AK-47 रखवाकर अरेस्ट करवा दूंगा",
      subNewsImgUrl: "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
      subNewsVideoUrl: "https://www.crimetak.in/top-news/video/watch-video-visuals-of-protesters-looting-things-and-lying-on-sheikh-hasinas-bed-in-her-residence-go-viral-3018585-2024-08-05",
      subNewsContent: "56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
      autherName:" Parivesh Gupta"
    },
    // {
    //   type: "advertisement",
    //   adImgUrl: "https://example.com/path-to-your-advertisement.jpg",
      
    // },
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
