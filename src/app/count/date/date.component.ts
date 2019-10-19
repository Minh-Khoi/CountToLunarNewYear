import { Component, OnInit } from '@angular/core';
import { CountComponent } from '../count.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  countDays:number;
  demo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countDays  = self.demo.countDates;
      // console.log(self.demo.countSeconds);
    },1000);

  }

}
