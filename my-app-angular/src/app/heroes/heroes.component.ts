import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './../myservice.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  todo = ["ăn tẹt ga","ngủ xả láng","chơi thả phanh"];
  todaydate;
  propertyService;
  constructor( private myservice: MyserviceService) {}
  ngOnInit() {
    this.todaydate = this.myservice.getTodayDate();
    this.myservice.myProperty = "Propertyservice use Angular-service"
    this.propertyService = this.myservice.myProperty;
  }
}