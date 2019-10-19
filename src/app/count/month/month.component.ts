import { Component, OnInit } from '@angular/core';
import { CountComponent } from '../count.component';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  countMonths:number;
  demo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countMonths  = self.demo.countMonth;
      // console.log(self.demo.countSeconds);
    },1000);

  }

}
