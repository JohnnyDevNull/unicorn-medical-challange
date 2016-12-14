/**
 * @ngInject
 */
export default function applicationExampleRouter($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when("", function ($injector) {
        let $state = $injector.get("$state");
        $state.go("dashboard");
    });

    // for any unmatched url, redirect to error state
    $urlRouterProvider.otherwise(function ($injector) {
        let $state = $injector.get("$state");
        $state.go("error404");
    });

    $locationProvider.html5Mode(true);

    $stateProvider

        .state("dashboard", {
            url: "/dashboard",
            template: "dashboard!"
        })

        .state("error404", {
            url: "/error",
            template: "ERROR 404"
        });

}
