import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../count-to-lunar-new-year-eve/countdown.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  countSeconds: number;
  countMinutes: number;
  countHours: number;
  countDates: number;
  countWeeks: number;
  countMonth: number;

  constructor() {
    let self = this;
    let countdown = new CountdownService();
    self.countSeconds = (Math.round(countdown.countMiliSeconds() / 1000));
    self.countMinutes = Math.round(self.countSeconds / 60);
    self.countHours = Math.round(self.countSeconds / 60 / 60);
    self.countDates = Math.round(self.countSeconds / 60 / 60 / 24);
    self.countWeeks = Math.round(self.countDates / 7);
    self.countMonth = countdown.countMonths();
    // console.log(self.countSeconds);

  }

  ngOnInit() {

  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.

  }
}
