import * as angular from "angular";
import * as uiRouter from "angular-ui-router";

require("../assets/sass/styles.scss");
require("../node_modules/bootstrap/dist/css/bootstrap.css");
require("../node_modules/font-awesome/css/font-awesome.min.css");

import AppComponent from "./app.component";
import core from "./core/core.module";
import applicationExampleRouter from "./app.router";

export default angular
    .module("exampleApplication", [
        uiRouter.default,
        core
    ])

    .config(applicationExampleRouter)
    .component("aeApp", AppComponent.factory())

    .name;


