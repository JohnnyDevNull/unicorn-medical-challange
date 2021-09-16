import stackItemsAngular2 from '@cypress-fixtures/stack-items-angular2.json';
import stackItemsTypeScript from '@cypress-fixtures/stack-items-typescript.json';
import stackItemsWeather from '@cypress-fixtures/stack-items-weather.json';
import weatherData from '@cypress-fixtures/weatherdata.json';
import { IMockData } from '../app/core/tokens/mock-data.token';

export const appMockData: IMockData = {
  stackItemsTypeScript: stackItemsTypeScript as any,
  stackItemsAngular2: stackItemsAngular2 as any,
  stackItemsWeather: stackItemsWeather as any,
  weatherData: weatherData as any
};
