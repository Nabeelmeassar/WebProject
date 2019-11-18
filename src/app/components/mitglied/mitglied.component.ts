import { Component, OnInit } from '@angular/core';
import { Mitglied} from '../../model/mitglied';
import {MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
  selector: 'app-mitglied',
  templateUrl: './mitglied.component.html',
  styleUrls: ['./mitglied.component.css']
})
export class MitgliedComponent implements OnInit {
    private mitglieds: any;
    constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
        // this.myService.getTest(this.mitglieds);
        console.log(this.myService.test);
        this.mitglieds = this.myService.test;
        console.log(this.mitglieds);

  }
    showMitglied(mitglieds: any) {
        console.log(mitglieds);
        this.mitglieds = mitglieds;
  }
}
