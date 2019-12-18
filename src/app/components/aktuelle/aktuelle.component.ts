import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../services/admin-service.service';

@Component({
  selector: 'app-aktuelle',
  templateUrl: './aktuelle.component.html',
  styleUrls: ['./aktuelle.component.css']
})
export class AktuelleComponent implements OnInit {

  constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {
  }

}
