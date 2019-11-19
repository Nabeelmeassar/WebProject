import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Buch} from '../../model/Buch';
import { MitgliedServiceService} from '../../services/mitglied-service.service';
import {Mitglied} from '../../model/mitglied';

@Component({
  selector: 'app-add-buch',
  templateUrl: './add-buch.component.html',
  styleUrls: ['./add-buch.component.css']
})
export class AddBuchComponent implements OnInit {
    buchForm  = new FormGroup({
      author: new FormControl(''),
      title: new FormControl(''),
      publisher: new FormControl(''),
      releaseDate: new FormControl(''),
      theme: new FormControl(''),
    });

  constructor(private myService: MitgliedServiceService) { }
  public Buecher: Buch[] = [];
  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.buchForm.value.length > 0) {
    } else {
      this.clickMethod(this.buchForm.value.name);
      console.log(this.Buecher);
    }
  }
  clickMethod(name: string) {
    if (confirm('Möchten Sie ' + name + ' hinzufügen')) {

      this.Buecher.push(this.buchForm.value);
      this.myService.AddBuch(this.Buecher);
    } else {
    }
  }
  deleteDate(emailAdresse: string) {
    // @ts-ignore
    this.Buecher.splice(this.Buecher.indexOf(emailAdresse), 1);
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
