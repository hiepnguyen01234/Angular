import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {trigger, state, style, transition, animate} from '@angular/animations';

import { TestObject } from 'protractor/built/driverProviders';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations: [
    trigger('myanimation',[
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ],
  styles: [`
      div{
         margin: 0 auto;
         text-align: center;
      }
      .rotate{
          width: 340px;
          heigh: 82px;
         border:solid 1px red;
      }
   `],
})
export class AppComponent {
  title = 'My First test title';
  subtitle = 'why you are here';
  todaydate;
  propertyService;
  results;
  username;
  formdata;
  months = ["thang 1","thang 2","thang 3","thang 4","thang 5","thang 6","thang 7","thang 8","thang 9","thang 10","thang 11","thang 12"];
  is_available = true;
  myClickFunction(event){
    alert("Did you click this button: Click Me");
  }
  changemonths(event){
    alert("you changed the month in the selected dropdown!");
  }
  /*onClickSubmit(data) {
    alert("your input username is: " + data.username);
  }*/
  onClickSubmit(data) { this.username = data.username;}
  pwdLengthValidator(control) {
    if(control.value.length < 3){
      return {pwd: true};
    }
  }
  constructor (private myservice: MyserviceService, private http: HttpClient) {}
  ngOnInit() {
    this.todaydate = this.myservice.getTodayDate();
    this.myservice.myProperty = "This text use Angular-service to display";
    this.propertyService = this.myservice.myProperty;
    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe(data => {
      console.log(data);
      this.results = data;
    });
    this.formdata = new FormGroup({
      username: new FormControl("Nguyen quang thang", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ])),
      pwd: new FormControl("123", this.pwdLengthValidator)
    });
  }
  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
}
