import { Component } from '@angular/core';
import {MitgliedServiceService} from './services/mitglied-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebProject';
  constructor(private myService: MitgliedServiceService) {
  }

}
