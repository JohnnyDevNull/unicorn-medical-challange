import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ISearchResult } from './interfaces';

@Injectable()
export class SearchService {

  private static readonly apiUrl =
      'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: HttpClient) {}

  search(keyword: string): Observable<ISearchResult> {
    return this.http.get<ISearchResult>(SearchService.apiUrl + keyword).pipe(
      map((res) => {
        console.log('API USAGE: ' + res.quota_remaining + ' of ' + res.quota_max + ' requests available' );
        return res;
      }),
      catchError((err) => of(err.json()))
    );
  }
}
