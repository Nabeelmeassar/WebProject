import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';


@Component({
  selector: 'app-buecher',
  templateUrl: './buecher.component.html',
  styleUrls: ['./buecher.component.css']
})
export class BuecherComponent implements OnInit {

  private Buecher: any;
  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
    // this.myService.getTest(this.mitglieds);
    console.log(this.myService.buecher);
    this.Buecher = this.myService.buecher;
    console.log(this.Buecher);

  }

}
