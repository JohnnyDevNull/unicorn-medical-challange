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

export type ISearchResult = Array<ISearchResultItem>;

export class SearchService {

    private static readonly apiUrl =
        "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";

    /**
     * @ngInject
     */
    constructor(private $http: ng.IHttpService) {

    }

    search(keyword: string): ng.IHttpPromise<ISearchResult> {
        return this.$http.get(SearchService.apiUrl + keyword)
            .then((data: any) => {
                console.log("API USAGE: " + data.data.quota_remaining + " of " + data.data.quota_max + "requests available" );
                return data.data.items;
            })
            .catch((err) => {
                console.log("error during search", err);
                return err;
            });
    }


}
