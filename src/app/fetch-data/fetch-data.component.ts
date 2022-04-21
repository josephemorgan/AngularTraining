import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../Models/weather-forecast';
import { SampleDataClientService } from '../sample-data-client.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {

  public forecasts: WeatherForecast[] = [];
  constructor(private sampleDataClient: SampleDataClientService) { }

  ngOnInit() {
    this.sampleDataClient.getWeatherForecast().subscribe(resut => {
      this.forecasts = resut;
    }, error => console.error(error));
  }
};
