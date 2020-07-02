import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  entries = [];
  units = this.weatherService.getUnits();

  sliderConfig = {
    freeMode: true,
    spaceBetween: 5,
    slidesPerView: 3.3
  }

  constructor(private geolocation: Geolocation, private platform: Platform,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.geolocation.getCurrentPosition().then(position => {
        console.log('test: ', position);
        this.entries.push({ type: 'geo', val: position.coords, class: 'cold' });
        
        this.getWeather(0).subscribe(res => {
          this.entries[0].weather = res;
          console.log('weather', res);
        });

        this.getForecast(0).subscribe(res => {
          this.entries[0].forecast = res;
          console.log('forcast: ', res);
        });
      }, err => {
        console.log('position error: ', err);
      })
    });
  }

  getWeather(index) {
    let info = this.entries[index];
    return this.weatherService.getCurrentWeather(info);
  }

  getForecast(index) {
    let info = this.entries[index];
    return this.weatherService.getForecast(info);
  }

  getWeatherIcon(icon) {
    return this.weatherService.getWeatherIcon(icon);
  }

  changeUnits() {
    this.units = this.weatherService.changeUnits();

    for(let i = 0; i < this.entries.length; i++) {
      this.loadWeather(i,true);
    }
  }

  loadWeather(index, forceRefresh = false) {

  }

  getUnitsString() {
    return this.units == 'metric' ? '°C' : '°F';
  }

}
