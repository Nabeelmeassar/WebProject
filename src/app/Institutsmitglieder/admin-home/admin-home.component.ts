import { Component, OnInit } from '@angular/core';
import { MitgliedServiceService} from '../../services/mitglied-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  isLogin: boolean;
  private username = 'admin';
  private password = 'admin';

  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private myService: MitgliedServiceService) { }

  ngOnInit() {
  }

    login() {
        this.myService.isLogin = true;
    }
    logout() {
      this.myService.isLogin = false;
  }

  onSubmit() {
  if (this.profileForm.value.name === this.username && this.profileForm.value.password === this.password) {
    this.login();
    alert('Login successfully');
  } else {
    this.logout();
    alert('Login Failed. Please try again');
  }
  }
}

