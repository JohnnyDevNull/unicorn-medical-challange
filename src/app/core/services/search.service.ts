import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ISearchResultItem  {
    answer_count: number;
    closed_date: number;
    closed_reason: string;
    creation_date: number;
    is_answered: boolean;
    last_activity_date: number;
    link: string;
    score: number;
    tags: Array<string>;
    title: string;
    view_count: number;
}

@Injectable()
export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";

    constructor(private http: HttpClient) {

    }

    search(keyword: string): Observable<any> {
        return this.http.get<JSON>(SearchService.apiUrl + keyword).pipe(
            // map((res: Response) => {
            //    console.log("API USAGE: " + res.quota_remaining + " of " + res.quota_max + " requests available" );
            //    return res;
            // }),
            catchError((err) => of(err.json()))
        );
    }


}
