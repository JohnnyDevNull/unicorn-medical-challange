import * as angular from "angular";
import "angular-mocks/angular-mocks";
import {redNavbarDirective} from "./navbar.directive";

var $compile: ng.ICompileService,
    $scope,
    elem;

beforeEach(inject((_$compile_: ng.ICompileService, $rootScope: ng.IRootScopeService) => {

    angular
        .module("exampleApplication", [])
        .directive("aeNavbar", redNavbarDirective);

    beforeEach(angular.mock.module("templates"));

    $compile = _$compile_;
    $scope = $rootScope;

    elem = angular.element("<ae-navbar></ae-navbar>");

    $compile(elem)($scope);
    $scope.$digest();
}));


describe("client.helpIcon", () => {

    it("render a questionare icon", () => {

        console.log("elem", elem);
        
        var i = elem.find("i");

        expect(i.hasClass("fa")).toBeTruthy();
        expect(i.hasClass("fa-question")).toBeTruthy();
    });

    xit("add correct href link to a tag", () => {
        var a = elem.find("a");

        expect(a.attr("href")).toEqual("https://wiki.redmedical.de/scotch/beer/tequila");
    });

});


