import { Component, OnInit, Input } from '@angular/core';
import { CountComponent } from '../count.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  countSeconds: number;
  demo: any;

  constructor() {
  }

  ngOnInit() {
    let self = this;
    let countPerSecond = setInterval(function () {
      self.demo = new CountComponent();
      self.countSeconds = self.demo.countSeconds;
      // console.log(self.demo.countSeconds);
      // if (self.countSeconds == 0) {
      if (false) {
        clearInterval(countPerSecond);
        (<HTMLElement>document.getElementsByClassName('root')[0]).style.display = "none";
        (<HTMLElement>document.getElementsByClassName('phaohoa')[0]).style.display = "block";
        (<HTMLAudioElement>document.querySelector('.phaohoa audio')).autoplay = true;
        setTimeout(() => { window.location.reload(); }, 3 * 60 * 1000);

      }
      // else if (self.countSeconds == 5040) {
      //   (<HTMLElement>document.getElementsByClassName('root')[0]).style.display = "block";
      //   (<HTMLElement>document.getElementsByClassName('phaohoa')[0]).style.display = "none";

      // }
    }, 1000);

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
