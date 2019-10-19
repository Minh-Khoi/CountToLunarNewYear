import { Component, OnInit } from '@angular/core';
import { CountComponent } from '../count.component';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  countWeeks:number;
  demo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countWeeks  = self.demo.countWeeks;
      // console.log(self.demo.countSeconds);
    },1000);

  }

}
