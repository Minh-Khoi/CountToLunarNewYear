import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { WeatherService } from '../weather-service/weather.service';



@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.css']
})
export class WeatherTodayComponent implements OnInit {
  citiesCaller: WeatherService;
  citiesList: any[];
  citySelected: number ;
  weatherGotten: any = {};
  weatherICONLink: string="";
  weatherData: any={
    "description": "",
      "temperature":"",
      "humidity":"",
      "pressure":"",
      "wind_speed":""
  };

  constructor() {
    this.citiesCaller = new WeatherService();
  }

  ngOnInit() {
    this.citiesList = this.citiesCaller.citiesList;
    // console.log( citiesList);
    this.citySelected = this.citiesList[0];
    // $('select').selectpicker({ dropupAuto: false });
  }

  citySelectingEvent(event){// this is the AJAX Function receive responseText from  API server
    // console.log(event.target.value)
    let self=this;
    // console.log(self.citySelected);
    this.citiesCaller.getWeather(event.target.value,self,  this.getWeather); //event.target.value was binded by the city.id
  }

  getWeather(xhttp, targetObj){// this is the Callback Function to handle responseText from AJAX function, ALL THE ACTIVITIES
                            //                                                                       WITH RESPONSETEXT WILL BE HERE
    let target  = JSON.parse(xhttp.responseText);
    // console.log( targetObj.citiesList[1]);
    targetObj.weatherGotten = target;
    targetObj.weatherICONLink = "http://openweathermap.org/img/wn/"+(targetObj.weatherGotten.weather[0].icon)+".png";
    targetObj.weatherData = {
        "description": target.weather[0].description,
        "temperature":Math.round(target.main.temp-273),
        "humidity":target.main.humidity,
        "pressure":target.main.pressure,
        "wind_speed":target.wind.speed
    };
    // console.log(target.main.temp);

    // console.log(document.getElementsByTagName("img")[0].alt);
    // let h4HTML = document.getElementsByTagName("h4")[0];
    // h4HTML.innerHTML =target.weather[0].icon;
  }
}
