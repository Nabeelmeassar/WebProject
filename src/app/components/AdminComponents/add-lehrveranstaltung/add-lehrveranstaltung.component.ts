import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../../services/admin-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Lehrveranstaltung} from '../../../model/lehrveranstaltung';

@Component({
    selector: 'app-add-lehrveranstaltung',
    templateUrl: './add-lehrveranstaltung.component.html',
    styleUrls: ['./add-lehrveranstaltung.component.css']
})
export class AddLehrveranstaltungComponent implements OnInit {
    public id: number;
    LehrveranstaltungForm = new FormGroup({
        id: new FormControl(''),
        author: new FormControl(''),
        publisher: new FormControl(''),
        lehrende: new FormControl(''),
        beschreibung: new FormControl(''),
        teilnahmeConter: new FormControl(''),
    });

    constructor(private AdminService: AdminServiceService) {
    }

    ngOnInit() {
        this.id = 1;
    }

    onSubmit() {

        this.LehrveranstaltungForm.controls.id.setValue(this.id);
        if (this.AdminService.confirmMethod(this.LehrveranstaltungForm.value.name)) {
            this.AdminService.konferenzB.push(this.LehrveranstaltungForm.value);
            this.id += 1;
        }
    }
}
