import { Injectable } from '@angular/core';
import { CalendarVietnamese } from 'date-chinese';
// const CalendarVietnamese = require('date-chinese').CalendarVietnamese;

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  nextNewYearEve: any[5];
  // convertedToGregorian: any;
  today: Date;
  convertedToGregorian: Date;

  constructor() {
    this.today = new Date();
    let nextYear = this.today.getFullYear() + 1;  //2020
    let lunarCal = new CalendarVietnamese();

    let nextYearConverterToGregorian = lunarCal.newYear(nextYear);
    lunarCal.fromJDE(nextYearConverterToGregorian);
    let gregorianDate = lunarCal.toGregorian();

    let previousNextYearConverterToGregorian = lunarCal.newYear(nextYear - 1);// the year previous of "nextYear"
    lunarCal.fromJDE(previousNextYearConverterToGregorian);
    let previousGregorianDate = lunarCal.toGregorian();//the previous "new Year eve" in Lunar

    let gregorianDateGetTime = new Date(gregorianDate.year, gregorianDate.month - 1, gregorianDate.day).getTime();
    let previousGregorianDateGetTime = new Date(previousGregorianDate.year, previousGregorianDate.month - 1, previousGregorianDate.day)
      .getTime();

    if ((gregorianDateGetTime - previousGregorianDateGetTime) > (gregorianDateGetTime - this.today.getTime())) {
      this.convertedToGregorian = new Date(gregorianDate.year, gregorianDate.month - 1, gregorianDate.day, 0, 0, 0, 0);
      //this is lunar new year date
    } else {
      this.convertedToGregorian = new Date(previousGregorianDate.year, previousGregorianDate.month - 1, previousGregorianDate.day);
      //this is also lunar new year date but after passing the Gregorian new Year Eve
      // console.log('new year---' + this.convertedToGregorian.getFullYear());
    }

    // console.log(gregorianDate);
  }

  // getLunarNextYear(){
  //   let today = new Date();
  //   let nextYear = today.getFullYear()+1;
  //   let lunarCal = new CalendarVietnamese();
  //   let nextYearConverter = lunarCal.newYear(nextYear);
  //   lunarCal.fromJDE(nextYearConverter);
  //   return lunarCal.get();
  // }
  // getGregorianDay(lunar: any[]){
  // }

  public countMiliSeconds() {
    return this.convertedToGregorian.getTime() - this.today.getTime();
  }
  public countMonths() {
    return this.convertedToGregorian.getMonth() - this.today.getMonth() +
      ((this.convertedToGregorian.getFullYear() < this.today.getFullYear()) ? 12 : 0);
  }
}
