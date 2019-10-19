import { Component, OnInit, DoCheck, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { WorkWithServerService } from '../work-with-service/work-with-server.service';
import { LunarService } from '../lunar-service/lunar.service';
import weather from 'openweather-apis';

@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit, DoCheck {
  xhr: XMLHttpRequest;
  todayDisplayer : string;
  memoriedDayArray: any[] ;
  memoriedToday: string[]=[];
  link: string[]=[];
  linkIMG: string[]=[];
  @Output() todayComponentUpdated = new EventEmitter<string>();

  // @Output()

  //LIFE CIRCLES HOOKS
  constructor() {
    this.loadData();
    this.todayDisplayer= this.getDayOfWeek(new Date().getDay())+", " + new Date().toDateString().substring(4);
    // console.log(document.querySelector(".hiddenDOM").innerHTML);
    let strData  =  this.loadData();
    this.memoriedDayArray = JSON.parse(strData );
    // console.log( strData);
    // console.log( this.memoriedDayArray[0].name);
    this.checkAndPickDayInMemory(this.memoriedDayArray);
    // weather.setAPPID("ce9f4a269c86e409e1590c7fb2b4c3e7");
    // weather.setUnits('metric');
    // weather.setCity("London");
    // weather.getHumidity(function(err, hum){
    //     console.log(hum);
    // });

  }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.exportLinkIMG();
  }

  ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
    // document.querySelector(".root").style.backgroundImage = (this.link[0] || "");
  }

  //FUNCTIONs
  loadData(){
    let responsedData = new WorkWithServerService();
    return responsedData.loadData2();
  }

  getDayOfWeek(d : number){
    switch (d){
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Sartuday";
      case 0:
        return "Sunday";
      case 3:
        return "Wednesday";
    }
  }

  checkAndPickDayInMemory(memoriedDay: any[]){
    let today = new Date();
    for(let d of memoriedDay){
      if (!d.date.isLunar) {
        // console.log((parseInt(d.date.month) == today.getMonth()+1)+ "========" + d.name);
        if(parseInt(d.date.day) == today.getDate() && parseInt(d.date.month) == today.getMonth()+1){
          this.memoriedToday.push(d.name);
          this.link.push(d.link);
          this.linkIMG.push(d.linkIMG);
        }
      } else {
        let lunarService = new LunarService(today.getFullYear(), today.getMonth()+1, today.getDate());
        // console.log(parseInt(d.date.month) == (lunarService.loadLunarMonth()));
        if(parseInt(d.date.day) == lunarService.loadLunarDay() && parseInt(d.date.month) == (lunarService.loadLunarMonth())){
          this.memoriedToday.push(d.name);
          this.link.push(d.link);
          this.linkIMG.push(d.linkIMG);
        }
      }
    }
    if(this.memoriedToday.length ==0) this.memoriedToday.push("just a normal day");
  }

  exportLinkIMG(){
    this.todayComponentUpdated.emit(this.linkIMG[1]);
    // console.log("run ok");
  }

}
