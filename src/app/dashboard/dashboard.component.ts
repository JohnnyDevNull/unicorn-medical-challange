import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArrayRandom, ArrayZipFlat } from '../core/functions';
import { ISearchResultItem } from '../core/services/interfaces';
import { IWatherDataItem } from '../core/services/interfaces/weather-data-item.iface';
import { SearchService } from '../core/services/search.service';
import weatherData from '../core/services/weatherdata.json';

interface StackListConfig {
  keyword: string;
  items: Observable<Array<ISearchResultItem | IWatherDataItem>>;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  stackLists: Array<StackListConfig> = [];

  constructor(
    private readonly searchService: SearchService
  ) {
    this.stackLists.push({
      keyword: 'TypeScript',
      items: this.searchService.search('TypeScript').pipe(map(res => this.limitItems(res, 10)))
    });
    this.stackLists.push({
      keyword: 'Angular2',
      items: this.searchService.search('Angular2').pipe(map(res => this.limitItems(res, 10)))
    });
    this.stackLists.push({
      keyword: 'Weather',
      items: this.searchService.search('Weather').pipe(
        map(res => {
          const items = this.limitItems(res, 5);
          const weatherSample = ArrayRandom(weatherData, 5);
          return ArrayZipFlat(items, weatherSample);
        }
      ))
    });
  }

  public limitItems(items: Array<ISearchResultItem>, limit: number): Array<ISearchResultItem> {
    return items?.length > 0 ? items.slice(0, limit) : items;
  }
}
