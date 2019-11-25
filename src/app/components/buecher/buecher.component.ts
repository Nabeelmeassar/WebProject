import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

import {Buch} from '../../model/buch';


@Component({
  selector: 'app-buecher',
  templateUrl: './buecher.component.html',
  styleUrls: ['./buecher.component.css']
})
export class BuecherComponent implements OnInit {
  // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  isCollapsed: boolean;
  constructor(private myService: MitgliedServiceService) { }


  ngOnInit() {
    this.isCollapsed = true;
  }

}
