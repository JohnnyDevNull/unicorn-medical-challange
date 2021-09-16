import { Inject, Injectable, Optional } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { IMockData, MOCK_DATA } from '../tokens/mock-data.token';
import { IWeatherDataItem } from './interfaces';

@Injectable({ providedIn: 'root' })
export class WeatherDataService {

  constructor(
    @Inject(MOCK_DATA) @Optional()
    private readonly mockData: IMockData
  ) {}

  getWeatherData(): Observable<IWeatherDataItem | null> {
    return defer(() => of(this.mockData?.weatherData ? this.mockData.weatherData : null));
  }

}
