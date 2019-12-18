import { Component, OnInit } from '@angular/core';
import { AdminServiceService} from '../../../services/admin-service.service';
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
  constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {
  }

    login() {
        this.AdminService.isLogin = true;
    }
    logout() {
      this.AdminService.isLogin = false;
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

