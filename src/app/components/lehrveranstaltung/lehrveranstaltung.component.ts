import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
  selector: 'app-lehrveranstaltung',
  templateUrl: './lehrveranstaltung.component.html',
  styleUrls: ['./lehrveranstaltung.component.css']
})
export class LehrveranstaltungComponent implements OnInit {

  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
  }

  suchen() {
  }
}
