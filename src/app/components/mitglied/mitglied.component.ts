import { Component, OnInit } from '@angular/core';
import { Mitglied} from '../../model/mitglied';

@Component({
  selector: 'app-mitglied',
  templateUrl: './mitglied.component.html',
  styleUrls: ['./mitglied.component.css']
})
export class MitgliedComponent implements OnInit {
public mitglieds: Array<Mitglied>;
  constructor() { }

  ngOnInit() {
    // @ts-ignore
    this.mitglieds = [
      new Mitglied('Nabeel', '223', 'meassar2222@hotmail.com', 'student'),
      new Mitglied('lkfd', 'klfg', 'measslkgfar2222@hotmail.com' , 'student'),
      new Mitglied('fg', '2gf23', 'meassar2222@hotmail.com' , 'student'),
      new Mitglied('fg', 'fg', 'fg@hotmail.com' , 'student'),
      new Mitglied('fg', 'fg', 'fg@hotmail.com' , 'student'),
      new Mitglied('fg', 'fg', 'fg@hotmail.com' , 'student')
    ];
  }

}
