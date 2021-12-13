import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weather: WeatherServiceService) { }
   
  city!: string;
  temp!: number;
  name!: string;
  country!: string;
  description!: string;
  icon!: string
  data!: Date;


  ngOnInit(): void {
  }
  
  getInfo(){
    this.weather.getWeatherInfo(this.city).subscribe(response => {
      this.temp = Math.round(response.main.temp),
      this.name = response.name,
      this.country = response.sys.country,
      this.description = response.weather[0].description,
      this.icon = response.weather[0].icon,
      console.log(response)
    })
    this.data = new Date;
  }

}
