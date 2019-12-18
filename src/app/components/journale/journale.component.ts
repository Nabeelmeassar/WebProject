import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../services/admin-service.service';

@Component({
    selector: 'app-journale',
    templateUrl: './journale.component.html',
    styleUrls: ['./journale.component.css']
})
export class JournaleComponent implements OnInit {
    constructor(private AdminService: AdminServiceService) {
    }

    ngOnInit() {
    }

}
