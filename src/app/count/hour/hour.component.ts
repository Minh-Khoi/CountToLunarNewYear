import { Component, OnInit } from '@angular/core';
import { CountComponent } from "../count.component";


@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})

export class HourComponent implements OnInit {
  countHours:number;
  demo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countHours  = self.demo.countHours;
      // console.log(self.demo.countSeconds);
    },1000);

  }

}
