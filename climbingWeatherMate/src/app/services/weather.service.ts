import { Injectable } from '@angular/core';
import config from '../../../config.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = config.OPEN_WEATHER_API_KEY;
  private units = 'imperial';
  private baseURL = "https://api.openweathermap.org/data/2.5";

  constructor(private http: HttpClient) { }

  getCurrentWeather(info){
    if (info.type == 'geo') {
      return this.http.get(`${this.baseURL}/weather?lat=${info.val.latitude}&lon=${info.val.longitude}&appid=${this.apiKey}&units=${this.units}`);
    } else {
      return this.http.get(`${this.baseURL}/weather?q=${info.val}&APPID=${this.apiKey}&units=${this.units}`);
    }
  }
}
