import { Component, OnInit, Input } from '@angular/core';
import {CountComponent} from '../count.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
   countSeconds:number;
  demo: any;

  constructor() {
  }

  ngOnInit() {
    let self = this;
    setInterval(function(){
      self.demo = new CountComponent();
      self.countSeconds  = self.demo.countSeconds;
      // console.log(self.demo.countSeconds);
    },1000);

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // setInterval(function(){
    //   this.demo = new CountComponent();
    //   console.log(this.demo.countSeconds);
    // },1000);
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // setInterval(function(){
    //   this.demo = new CountComponent();
    //   // console.log(this.demo.countSeconds);
    // },1000);
  }
}
