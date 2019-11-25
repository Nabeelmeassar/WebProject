import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    images = ['https://hs-flensburg.de/sites/default/files/styles/full_width/public/mood/Neu_Campus_Mensa_Sommer_Menschen_Tische_Wolken.jpg?itok=bdqIQNN5',
        // tslint:disable-next-line:max-line-length
        'https://hs-flensburg.de/sites/default/files/styles/full_width/public/mood/gebaeude01_Web.jpg?itok=2695WiKP',
        // tslint:disable-next-line:max-line-length
        'https://hs-flensburg.de/sites/default/files/styles/full_width/public/mood/forschung01_web.jpg?itok=4NfiFA1t'
    ];

    ngOnInit() {
  }

}
