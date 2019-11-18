import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Mitglied} from '../../model/mitglied';
import { MitgliedServiceService} from '../../services/mitglied-service.service';

@Component({
  selector: 'app-add-mitglied',
  templateUrl: './add-mitglied.component.html',
  styleUrls: ['./add-mitglied.component.css']
})
export class AddMitgliedComponent implements OnInit {
  constructor(private myService: MitgliedServiceService) { }
  // install a array of member
  @Input()  public mitglieds: Mitglied[] = [];
  @Output() EventShowMitglied = new EventEmitter();
  profileForm = new FormGroup({
    name: new FormControl(''),
    buero: new FormControl(''),
    emailAdresse: new FormControl(''),
    stelle: new FormControl(''),

  });


  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.clickMethod(this.profileForm.value.name);
    this.EventShowMitglied.emit(this.mitglieds);
    console.log(this.mitglieds);
  }
  clickMethod(name: string) {
    if (confirm('Möchten Sie ' + name + ' hinzufügen')) {
      this.mitglieds.push(this.profileForm.value);
      this.myService.setTest(this.mitglieds);
    } else {

    }
  }

}
