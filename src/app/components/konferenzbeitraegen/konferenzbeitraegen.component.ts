import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../services/admin-service.service';

@Component({
  selector: 'app-konferenzbeitraegen',
  templateUrl: './konferenzbeitraegen.component.html',
  styleUrls: ['./konferenzbeitraegen.component.css']
})
export class KonferenzbeitraegenComponent implements OnInit {

  constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {
  }

}
