import { Component, OnInit } from '@angular/core';
import { Mitglied} from '../../model/mitglied';
import {AdminServiceService} from '../../services/admin-service.service';

@Component({
  selector: 'app-mitglied',
  templateUrl: './mitglied.component.html',
  styleUrls: ['./mitglied.component.css']
})
export class MitgliedComponent implements OnInit {

    constructor(private AdminService: AdminServiceService) {
    }

    ngOnInit() {
    }
}
