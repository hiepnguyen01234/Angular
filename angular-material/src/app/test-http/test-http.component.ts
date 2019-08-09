import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {
  showData;
  onClick() {
    this.router.navigate(['mainPage']);
  };
  constructor(private http: HttpClient, private router: Router) { };
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {this.showData = data;});
  }

}
