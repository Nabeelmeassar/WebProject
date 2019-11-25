import { Component, OnInit } from '@angular/core';
import { Mitglied} from '../../model/mitglied';
import {MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
  selector: 'app-mitglied',
  templateUrl: './mitglied.component.html',
  styleUrls: ['./mitglied.component.css']
})
export class MitgliedComponent implements OnInit {

    constructor(private myService: MitgliedServiceService) {
    }

    ngOnInit() {
    }
}
