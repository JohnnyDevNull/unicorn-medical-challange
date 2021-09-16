import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ArrayLimit, ArrayRandom, ArrayZipFlat } from '../core/functions';
import { SearchService, WeatherDataService } from '../core/services';
import { StackListConfig } from './stack-list.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  stackLists: Array<StackListConfig> = [];

  constructor(
    private readonly searchService: SearchService,
    private readonly weatherService: WeatherDataService
  ) {
    this.stackLists.push({
      keyword: 'TypeScript',
      items: this.searchService.search('TypeScript').pipe(
        map(res => ArrayLimit(res, 10))
      )
    }, {
      keyword: 'Angular2',
      items: this.searchService.search('Angular2').pipe(
        map(res => ArrayLimit(res, 10))
      )
    }, {
      keyword: 'Weather',
      items: this.searchService.search('Weather').pipe(
        switchMap(searchResult => this.weatherService.getWeatherData().pipe(
          map(weatherResult => {
            const items = ArrayLimit(searchResult, 5);
            const weatherSample = ArrayRandom(weatherResult || [] as any, 5);
            return ArrayZipFlat(items, weatherSample);
          }
        )),
      ))
    });
  }
}
