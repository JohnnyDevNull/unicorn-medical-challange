import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISearchResultItem } from '../core/services/interfaces';
import { SearchService } from '../core/services/search.service';

interface StackListConfig {
  keyword: string;
  items: Observable<ISearchResultItem[]>;
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
      items: this.searchService.search('Weather').pipe(map(res => this.limitItems(res, 10)))
    });
  }

  public limitItems(items: Array<ISearchResultItem>, limit: number): Array<ISearchResultItem> {
    return items?.length > 0 ? items.slice(0, limit) : items;
  }
}
