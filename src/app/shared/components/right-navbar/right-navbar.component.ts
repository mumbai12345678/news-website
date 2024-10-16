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

 

  advertisements = [
    {
      "rightTopAdvertisement": {
        "articleContainer": {
          "articleImage": {
            "src": "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            "title": "AN 12 Transport plane Crash Thomas Cherian",
            "alt": "AN 12 Transport plane Crash Thomas Cherian",
            "loading": "lazy",
            "role": "button",
            "height": "80",
            "width": "140"
          },
          "articleContent": {
            "articleTitle": "56 सालों के बाद विमान हादसे में मारे गए सेना के इस अधिकारी का शव मिला, बर्फ के इस पहाड़ में छिपा था शव!",
            "articleMeta": {
              "articleDate": "Oct 03 2024",
              "articleAuthor": "By CHIRAG GOTHI"
            }
          }
        }
      }
    },
    {
      "rightTopAdvertisement": {
        "articleContainer": {
          "articleImage": {
            "src": "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            "title": "Historical Artifact Found in Ancient Ruins",
            "alt": "Ancient Ruins",
            "loading": "lazy",
            "role": "button",
            "height": "80",
            "width": "140"
          },
          "articleContent": {
            "articleTitle": "पुरातात्विक स्थल में 2000 साल पुरानी कलाकृति की खोज!",
            "articleMeta": {
              "articleDate": "Sep 20 2024",
              "articleAuthor": "By JOHN DOE"
            }
          }
        }
      }
    },
    {
      "rightTopAdvertisement": {
        "articleContainer": {
          "articleImage": {
            "src": "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            "title": "Tech Breakthrough in AI",
            "alt": "AI Breakthrough",
            "loading": "lazy",
            "role": "button",
            "height": "80",
            "width": "140"
          },
          "articleContent": {
            "articleTitle": "AI तकनीक में क्रांति: भविष्य को आकार दे रहा है प्रौद्योगिकी",
            "articleMeta": {
              "articleDate": "Aug 15 2024",
              "articleAuthor": "By EMMA WATSON"
            }
          }
        }
      }
    },
    {
      "rightTopAdvertisement": {
        "articleContainer": {
          "articleImage": {
            "src": "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            "title": "Wildlife Conservation Efforts",
            "alt": "Wildlife Conservation",
            "loading": "lazy",
            "role": "button",
            "height": "80",
            "width": "140"
          },
          "articleContent": {
            "articleTitle": "विलुप्त प्रजातियों के संरक्षण में महत्वपूर्ण प्रगति",
            "articleMeta": {
              "articleDate": "Jul 28 2024",
              "articleAuthor": "By LUCAS GREEN"
            }
          }
        }
      }
    },
    {
      "rightTopAdvertisement": {
        "articleContainer": {
          "articleImage": {
            "src": "https://akm-img-a-in.tosshub.com/lingo/crtak/images/story/202410/66fe4a3ac2436-an-12-transport-plane-crash-thomas-cherian-033937552-16x9.jpg?size=280:180",
            "title": "Sports Championship Highlights",
            "alt": "Championship Highlights",
            "loading": "lazy",
            "role": "button",
            "height": "80",
            "width": "140"
          },
          "articleContent": {
            "articleTitle": "टीम XYZ ने शानदार जीत के साथ चैंपियनशिप जीती!",
            "articleMeta": {
              "articleDate": "Jun 10 2024",
              "articleAuthor": "By ALEX JONES"
            }
          }
        }
      }
    },
    
    
   
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
