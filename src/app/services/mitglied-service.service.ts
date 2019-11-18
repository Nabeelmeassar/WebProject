import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MitgliedServiceService {
   test: any;

  public setTest(value) {
    this.test = value;
  }
  public getTest(mitglied) {
    mitglied = this.test;
  }
}
