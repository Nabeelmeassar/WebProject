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
  public mitglieds: Mitglied[] = [];
  @Output() EventShowMitglied = new EventEmitter();
  profileForm = new FormGroup({
    name: new FormControl(''),
    buero: new FormControl(''),
    emailAdresse: new FormControl(''),
    stelle: new FormControl(''),

  });


  ngOnInit() {
    // this.mitglieds = this.myService.test;

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.profileForm.value.length > 0) {
    } else {
      this.clickMethod(this.profileForm.value.name);
      this.EventShowMitglied.emit(this.mitglieds);
      console.log(this.mitglieds);
    }
  }
  clickMethod(name: string) {
    if (confirm('Möchten Sie ' + name + ' hinzufügen')) {

        this.mitglieds.push(this.profileForm.value);
        this.myService.setTest(this.mitglieds);
    } else {
    }
  }
  deleteDate(emailAdresse: string) {
    // @ts-ignore
    this.mitglieds.splice(this.mitglieds.indexOf(emailAdresse), 1);
  }
    suchen() {
      // tslint:disable-next-line:one-variable-per-declaration
      let input, filter, table, tr, td, i, txtValue;
      input = document.getElementById('suchen');
      filter = input.value.toUpperCase();
      table = document.getElementById('myTable');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    }
}
