import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { CountComponent } from './count/count.component';
import { AnnounceComponent } from './count/announce/announce.component';
import { SecondComponent } from './count/second/second.component';
import { MinuteComponent } from './count/minute/minute.component';
import { HourComponent } from './count/hour/hour.component';
import { DateComponent } from './count/date/date.component';
import { WeekComponent } from './count/week/week.component';
import { MonthComponent } from './count/month/month.component';
import { WorkWithServerService } from './work-with-service/work-with-server.service';
import { LunarService } from './lunar-service/lunar.service';
import { CountdownService } from './count-to-lunar-new-year-eve/countdown.service';
import { WeatherTodayComponent } from './weather-today/weather-today.component';
import { WeatherService } from './weather-service/weather.service';
import { FormsModule } from '@angular/forms';
import { PhaohoaComponent } from './phaohoa/phaohoa.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    CountComponent,
    AnnounceComponent,
    SecondComponent,
    MinuteComponent,
    HourComponent,
    DateComponent,
    WeekComponent,
    MonthComponent,
    WeatherTodayComponent,
    PhaohoaComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [WorkWithServerService, LunarService,CountdownService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
