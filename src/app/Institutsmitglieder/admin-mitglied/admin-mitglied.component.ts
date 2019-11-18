import { Component, OnInit } from '@angular/core';
import {MitgliedServiceService} from '../../services/mitglied-service.service';


@Component({
  selector: 'app-admin-mitglied',
  templateUrl: './admin-mitglied.component.html',
  styleUrls: ['./admin-mitglied.component.css']
})
export class AdminMitgliedComponent implements OnInit {
  private mitglieds: any;
  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
    console.log(this.myService.test);
    this.mitglieds = this.myService.test;
    console.log(this.mitglieds);

  }


  delete(emailAdresse: string) {
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
