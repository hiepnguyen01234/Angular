import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData;
  onClickSubmit(data) {
    if((data.name != "") && (data.pwd != "")) {
      this.router.navigate(['mainPage']);
      var row = {
        "name": data.name,
        "pwd": data.pwd
      };
      this.service1.list.push(row);
    }
    else {
      if(data.name == "") {
        document.getElementById("nameId").style.backgroundColor = "lightpink";
      }
      if(data.pwd == "") {
        document.getElementById("pwdId").style.backgroundColor = "lightpink";
      }
      alert("what the hell! your name and password must full enter");
    }
  }
  constructor(private router: Router, private service1: Service1Service) { };
  ngOnInit() {
    this.formData = new FormGroup({name: new FormControl(""), pwd: new FormControl("")});
  }

}
