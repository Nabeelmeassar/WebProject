import {Component, OnInit} from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Lehrveranstaltung} from '../../model/lehrveranstaltung';

@Component({
    selector: 'app-add-lehrveranstaltung',
    templateUrl: './add-lehrveranstaltung.component.html',
    styleUrls: ['./add-lehrveranstaltung.component.css']
})
export class AddLehrveranstaltungComponent implements OnInit {
    public id: number;
    LehrveranstaltungForm = new FormGroup({
        id: new FormControl(''),
        lehrName: new FormControl(''),
        theme: new FormControl(''),
        lehrende: new FormControl(''),
        beschreibung: new FormControl(''),
        teilnahmeConter: new FormControl(''),
    });

    constructor(private myService: MitgliedServiceService) {
    }

    ngOnInit() {
        this.id = 1;
    }

    onSubmit() {

        this.LehrveranstaltungForm.controls.id.setValue(this.id);
        if (this.myService.confirmMethod(this.LehrveranstaltungForm.value.name)) {
            this.myService.myLehrveranstaltung.push(this.LehrveranstaltungForm.value);
            this.id += 1;
        }
    }
}
