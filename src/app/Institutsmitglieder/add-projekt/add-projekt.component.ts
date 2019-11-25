import {Component, OnInit} from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-projekt',
    templateUrl: './add-projekt.component.html',
    styleUrls: ['./add-projekt.component.css']
})
export class AddProjektComponent implements OnInit {
    ProjektForm = new FormGroup({
        id: new FormControl(''),
      projectName: new FormControl(''),
      mitarbeiter: new FormControl(''),
      beschreibung: new FormControl(''),
      geldgeber: new FormControl(''),
    });
    private id: number;

    constructor(private myService: MitgliedServiceService) {
    }

    ngOnInit() {
        this.id = 1;
    }

    onSubmit() {
        this.ProjektForm.controls.id.setValue(this.id);
        if (this.myService.confirmMethod(this.ProjektForm.value.name)) {
            this.myService.myProjekt.push(this.ProjektForm.value);
            this.id += 1;
        }
    }
}
