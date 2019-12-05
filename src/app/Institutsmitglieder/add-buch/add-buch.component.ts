import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Buch} from '../../model/buch';
import {MitgliedServiceService} from '../../services/mitglied-service.service';
import {Mitglied} from '../../model/mitglied';

@Component({
    selector: 'app-add-buch',
    templateUrl: './add-buch.component.html',
    styleUrls: ['./add-buch.component.css']
})
export class AddBuchComponent implements OnInit {
    buchForm = new FormGroup({
        id: new FormControl(''),
        author: new FormControl( null, [Validators.required, Validators.minLength(1)]),
        title: new FormControl(null, [Validators.required, Validators.minLength(1)]),
        publisher: new FormControl(null, [Validators.required, Validators.minLength(1)]),
        releaseDate: new FormControl(null, [Validators.required, Validators.minLength(1)]),
        theme: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    });
    constructor(private myService: MitgliedServiceService) {
    }

    public id: number;

    ngOnInit() {
        this.id = 1;
    }

    onSubmit() {
        this.buchForm.controls.id.setValue(this.id);
        if (this.myService.confirmMethod(this.buchForm.value.title)) {
            this.myService.buecher.push(this.buchForm.value);
            this.id += 1;
        }
    }

}
