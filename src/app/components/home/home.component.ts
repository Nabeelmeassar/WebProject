import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    images = ['assets/img/hs-1.jpg', 'assets/img/hs-2.jpg', 'assets/img/hs-3.jpg'];

    ngOnInit() {
  }

}
