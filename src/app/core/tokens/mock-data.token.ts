import { InjectionToken } from '@angular/core';
import { ISearchResult, IWeatherDataItem } from '../services/interfaces';

export interface IMockData {
  stackItemsAngular2: ISearchResult;
  stackItemsTypeScript: ISearchResult;
  stackItemsWeather: ISearchResult;
  weatherData: IWeatherDataItem;
}
export const MOCK_DATA = new InjectionToken<IMockData>('MOCK_DATA');
