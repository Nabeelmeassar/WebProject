import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
  selector: 'app-aktuelle',
  templateUrl: './aktuelle.component.html',
  styleUrls: ['./aktuelle.component.css']
})
export class AktuelleComponent implements OnInit {

  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
  }

}
