export function redNavbarDirective(): ng.IDirective {

    return <ng.IDirective> {
        restrict: "E",
        replace: true,
        template: require("./navbar.directive.html"),
        scope: {}
    };

}


