import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  uList;
  onClick() {
    this.router.navigate(['']);
  };
  constructor(private router: Router, private service1: Service1Service) { };
  ngOnInit() {
    this.uList = this.service1.list;
    console.log(this.uList);
  }

}
