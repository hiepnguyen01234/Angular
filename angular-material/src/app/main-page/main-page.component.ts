import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  valid = true;
  onClick() {
    this.router.navigate(['']);
  };
  onDelete(data) {
    this.service1.list.splice(this.service1.list.indexOf(data), 1);
    if(this.valid == true) {
      this.valid = false;
    }
    else {
      this.valid = true;
    }
  };
  onTest() {
    this.router.navigate(['testHttp']);
  };
  constructor(private router: Router, private service1: Service1Service) { };
  ngOnInit() {
  }

}
