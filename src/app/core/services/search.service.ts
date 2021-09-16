import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IMockData, MOCK_DATA } from '../tokens/mock-data.token';
import { ISearchOptions, ISearchResult, ISearchResultItem } from './interfaces';

const defaultSearchOptions: ISearchOptions = {
  pagesize: 10,
  order: 'desc',
  sort: 'creation',
  site: 'stackoverflow'
};

@Injectable({ providedIn: 'root' })
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?';

  constructor(
    private readonly http: HttpClient,
    @Inject(MOCK_DATA) @Optional()
    private readonly mockData: IMockData
  ) {}

  search(keyword: string, params = defaultSearchOptions): Observable<ISearchResultItem[]> {
    const mockData: any = this.mockData;
    if (environment.useSearchMockData && mockData && mockData[`stackItems${keyword}`]) {
      console.log('MOCK used!', keyword);
      return defer(() => of(mockData[`stackItems${keyword}`]?.items || []));
    }

    const apiParams = Object.assign(defaultSearchOptions, params);
    const url = this.buildUrlWithParams(apiParams, keyword);

    return this.http.get<ISearchResult>(url).pipe(
      tap((res) => {
        console.log(`API USAGE: ${res.quota_remaining} of ${res.quota_max} requests available`);
      }),
      map(res => res?.items?.length > 0 ? res.items : []),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  public buildUrlWithParams(params: ISearchOptions, keyword: string): string {
    const paramsObj = {...params, intitle: keyword };
    const urlParams = new URLSearchParams(paramsObj as any).toString();
    return SearchService.apiUrl + urlParams;
  }
}
