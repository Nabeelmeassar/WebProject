import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MitgliedServiceService {
   test: any;
   buecher: any;
   isLogin = true
  public setTest(value) {
    this.test = value;
  }
    public AddBuch(value) {
        this.buecher = value;
    }
  // public getTest(value) {
  //   value = this.test;
  // }
  public login() {
    this.isLogin = true;
}
public logout() {
  this.isLogin = false;
}
}
