import { Injectable } from '@angular/core';
import {CalendarVietnamese} from 'date-chinese';
// const CalendarVietnamese = require('date-chinese').CalendarVietnamese;

@Injectable({
  providedIn: 'root'
})
export class LunarService {
  cal : CalendarVietnamese;

  constructor(year: number, month: number, day:number) {
    this.cal = new CalendarVietnamese();
    this.cal.fromGregorian(year, month, day);
    // console.log(year + "==="+ month  + "==="+day);
    // console.log(this.cal.get());
    // let cal2 = new CalendarVietnamese();
    // let newCal = cal2.newYear(2019);
    // cal2.fromJDE(newCal);
    // console.log(cal2.year +"====="+ cal2.cycle);
  }

  loadLunarDay(){
    return this.cal.day;
  }

  loadLunarMonth(){
    return this.cal.month;
  }

}
