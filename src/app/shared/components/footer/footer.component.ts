import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  latestNews:any=[
    {
  heading:"पुणे में दोस्त संग घूमने गई थी 21 साल की लड़की, रात में सुनसान जगह 3 लड़कों ने पकड़ा,   "
   },
   {
    heading:"NIA का रिश्वतखोर डीएसपी, 20 लाख कैश लेते CBI ने पकड़ा, NIA का DSP बोला- AK-47 रखवाकर अरेस्ट करवा दूंगा"
     },
     {
      heading:"बुलेट से गया, मंदिर में दर्शन किया और सबको मार दी गोली. अमेठी में प्रेम-प्रसंग में कांड! WhatsApp से खुला राज"
       },
       {
        heading:"8 साल की उम्र में पिता की हत्या देखी, 22 साल बाद फिल्मी अंदाज में लिया मौत का बदला"
         }
  ]
  downloads:number=1

  constructor() { }

  ngOnInit(): void {
  }

}
