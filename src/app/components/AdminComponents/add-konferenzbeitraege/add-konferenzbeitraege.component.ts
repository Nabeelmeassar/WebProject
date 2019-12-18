import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../../services/admin-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-konferenzbeitraege',
    templateUrl: './add-konferenzbeitraege.component.html',
    styleUrls: ['./add-konferenzbeitraege.component.css']
})
export class AddKonferenzbeitraegeComponent implements OnInit {
  public id: number;
  KonferenzbeitraegeForm = new FormGroup({
    id: new FormControl(''),
    author: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    title: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    publisher: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    chapter: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    pages: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    releaseDate: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    theme: new FormControl(null, [Validators.required, Validators.minLength(1)]),
  });

  constructor(private AdminService: AdminServiceService) {
  }

  ngOnInit() {
    this.id = 1;
  }

  onSubmit() {

    this.KonferenzbeitraegeForm.controls.id.setValue(this.id);
    if (this.AdminService.confirmMethod(this.KonferenzbeitraegeForm.value.title)) {
      this.AdminService.konferenzB.push(this.KonferenzbeitraegeForm.value);
      this.id += 1;
    }
  }
}
