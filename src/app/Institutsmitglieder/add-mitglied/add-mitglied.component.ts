import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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
        id: new FormControl(null),
        name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
        buero: new FormControl(null, [Validators.required, Validators.minLength(1)]),
        emailAdresse: new FormControl(null, [Validators.compose([Validators.email, Validators.required])]),
        stelle: new FormControl(null, [Validators.required, Validators.minLength(1)]),

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
