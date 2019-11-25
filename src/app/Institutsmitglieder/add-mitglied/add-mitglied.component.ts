import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Mitglied} from '../../model/mitglied';
import {MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
    selector: 'app-add-mitglied',
    templateUrl: './add-mitglied.component.html',
    styleUrls: ['./add-mitglied.component.css']
})
export class AddMitgliedComponent implements OnInit {
    public id: number;

    constructor(private myService: MitgliedServiceService) {
    }

    // install a array of member
    profileForm = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        buero: new FormControl(''),
        emailAdresse: new FormControl(''),
        stelle: new FormControl(''),

    });

    ngOnInit() {
        this.id = 3;
    }

    onSubmit() {

        this.profileForm.controls.id.setValue(this.id);

        if (this.myService.confirmMethod(this.profileForm.value.name)) {
            this.myService.mitglied.push(this.profileForm.value);
            this.id += 1;
        }
    }
}
