import * as angular from "angular";
import "angular-mocks/angular-mocks";

import {SearchService} from "./service.search";

//
// angular
//     .module("exampleApplication", [])
//     .service("searchService", SearchService);

beforeEach(angular.mock.module("templates"));

describe("SearchService", () => {
    let ss: SearchService,
        $q: ng.IQService,
        $http: ng.IHttpService;

    beforeEach(angular.mock.inject((_$http_: ng.IHttpService, _$q_) => {
        ss = new SearchService(_$http_);
        $q = _$q_;
        $http = _$http_;
    }));

    describe("search", () => {

        it("should be defined", () => {
            expect(ss.search).toBeDefined();
        });

        it("should call $http backend with correct searchparam", () => {
            spyOn($http, "get").and.returnValue($q.when(true));
            ss.search("beeeeeer");

            expect($http.get).toHaveBeenCalledWith(jasmine.stringMatching(/beeeeeer/));
        });

    });

});

