import { Component, OnInit } from '@angular/core';
import { CountComponent } from '../count.component';

@Component({
  selector: 'app-minute',
  templateUrl: './minute.component.html',
  styleUrls: ['./minute.component.css']
})
export class MinuteComponent implements OnInit {
  countMinutes:number;
  demo: any;

  constructor() { }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countMinutes  = self.demo.countMinutes;
      // console.log(self.demo.countSeconds);
    },1000);

  }

}
