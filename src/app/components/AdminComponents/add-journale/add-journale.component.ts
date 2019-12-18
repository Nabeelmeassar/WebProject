import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminServiceService} from '../../../services/admin-service.service';

@Component({
  selector: 'app-add-journale',
  templateUrl: './add-journale.component.html',
  styleUrls: ['./add-journale.component.css']
})
export class AddJournaleComponent implements OnInit {

  public id: number;
  journaleForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    publisher: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    releaseDate: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    nummer: new FormControl(null, [Validators.required, Validators.minLength(1)]),
  });

  constructor(private AdminService: AdminServiceService) {
  }

  ngOnInit() {
    this.id = 3;
  }

  onSubmit() {
    this.journaleForm.controls.id.setValue(this.id);
    if (this.AdminService.confirmMethod(this.journaleForm.value.title)) {
      this.AdminService.journale.push(this.journaleForm.value);
      this.id += 1;
    }
  }

}
