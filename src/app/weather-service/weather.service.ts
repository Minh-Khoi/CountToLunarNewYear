import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  citiesList = [{}];
  weatherDatas : any;

  constructor() {
    let self = this;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.callback(this.responseText);
      }
    };
    xhttp.open("GET", "../../assets/current.city.list.json", true);
    xhttp.send();
  }

  callback(str){
    let list = JSON.parse(str);
    for(let city of list){
      if (city.country == "VN") {
        let cityData = {"name": city.name, "id": city.id, selected: false};
        this.citiesList.push(cityData);
      }
    }
  }

  getWeather(cityID: number, targetObj,  cFuntion){
    let self = this;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // self.callWeather(this.responseText, target);
        // console.log(target.status);
        cFuntion(this, targetObj);
      }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id="+cityID+"&APPID=ce9f4a269c86e409e1590c7fb2b4c3e7", true);
    xhttp.send();
  }

  // callWeather(str:string, target: any){
  //   target.status = JSON.parse(str);
  // }
  // callWeather(str:string){
  //   this.weatherDatas = JSON.parse(str);
  // }

}
