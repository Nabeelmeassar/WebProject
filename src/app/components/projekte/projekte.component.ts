import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';
import {FilterPipe} from 'ngx-filter-pipe';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})

export class ProjekteComponent implements OnInit {

  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
  }

}
