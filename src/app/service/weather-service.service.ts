import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAppWeather } from './interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private readonly http: HttpClient) { }

  getWeatherInfo(info: string): Observable<IAppWeather> {
    const params = new HttpParams().set('q', info ).set('appid', 'a77eb0584a718a82ce95624466f506df').set('units', 'metric');
    return this.http.get<IAppWeather>(environment.apiUrl, {params})

  }


}
