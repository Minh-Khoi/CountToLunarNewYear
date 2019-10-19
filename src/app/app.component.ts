import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkIMGBackground: string;
  title = 'countToLunarNewYear';
  gottenText: string="";

  constructor(){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  todayComponentUpdated($event){
    this.gottenText = $event || "";
    // console.log(this.gottenText);
  };
}
