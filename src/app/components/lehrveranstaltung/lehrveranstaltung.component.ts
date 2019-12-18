import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../services/admin-service.service';

@Component({
  selector: 'app-lehrveranstaltung',
  templateUrl: './lehrveranstaltung.component.html',
  styleUrls: ['./lehrveranstaltung.component.css']
})
export class LehrveranstaltungComponent implements OnInit {

  constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {
  }

  suchen() {
  }
}
