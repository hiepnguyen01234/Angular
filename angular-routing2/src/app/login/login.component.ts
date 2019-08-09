import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData;
  onClickSubmit(formData) {
    if((formData.username == "teo") && (formData.pass == "123")) {
      var row = {
        "name": formData.username,
        "pwd": formData.pass
      };
      this.service1.list.push(row);
      this.router.navigate(['mainpage']);
    }
    else {
      alert("your name or your password is incorrect");
    }
  };
  constructor(private router: Router, private service1: Service1Service) { };
  ngOnInit() {
    this.formData = new FormGroup({username: new FormControl("teo"), pass: new FormControl("123")});
  }

}
