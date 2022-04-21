import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherForecast } from './Models/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class SampleDataClientService {

  private readonly weatherForecasts = 'api/SampleData/WeatherForecasts'

  constructor(private http: HttpClient) { }

  public getWeatherForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.weatherForecasts);
  }
}
