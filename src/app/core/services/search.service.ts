import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { defer, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ISearchResult, ISearchResultItem } from './interfaces';
import { ISearchOptions } from './interfaces/search-options.iface';

const defaultSearchOptions: ISearchOptions = {
  pagesize: 10,
  order: 'desc',
  sort: 'creation_date',
  site: 'stackoverflow',
  reload: false
};

@Injectable({ providedIn: 'root' })
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?';

  constructor(
    private readonly http: HttpClient,
    @Inject(DOCUMENT)
    private readonly document: Document,
  ) {}

  private get localStorage(): Storage | null {
    return this.document.defaultView?.localStorage || null;
  }

  search(keyword: string, params = defaultSearchOptions): Observable<ISearchResultItem[]> {
    const searchOptions = Object.assign(defaultSearchOptions, params);
    const {reload, ...apiParams} = searchOptions;

    const storeItems = this.localStorage?.getItem(`stack_items_${keyword}`);
    if (storeItems != null && !reload) {
      return defer(() => of(JSON.parse(storeItems) as ISearchResultItem[]));
    }

    const url = this.buildUrlWithParams(apiParams, keyword);

    return this.http.get<ISearchResult>(url).pipe(
      tap((res) => {
        console.log(`API USAGE: ${res.quota_remaining} of ${res.quota_max} requests available`);
        if (res?.items?.length > 0) {
          this.localStorage?.setItem(`stack_items_${keyword}`, JSON.stringify(res.items));
        }
      }),
      map(res => res?.items?.length > 0 ? res.items : []),
      catchError((err) => of([]))
    );
  }

  public buildUrlWithParams(params: any, keyword: string): string {
    const paramsObj: any = {...params, intitle: keyword };
    const urlParams = new URLSearchParams(paramsObj).toString();
    return SearchService.apiUrl + urlParams;
  }
}
