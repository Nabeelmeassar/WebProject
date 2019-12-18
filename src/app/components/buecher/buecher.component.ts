import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../services/admin-service.service';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

import {Buch} from '../../model/buch';


@Component({
    selector: 'app-buecher',
    templateUrl: './buecher.component.html',
    styleUrls: ['./buecher.component.css']
})
export class BuecherComponent implements OnInit {
    isCollapsed: boolean;

    constructor(private AdminService: AdminServiceService) {
    }


    ngOnInit() {
        this.isCollapsed = false;
    }

}
