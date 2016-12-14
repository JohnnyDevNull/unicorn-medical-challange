import * as angular from "angular";

import layoutModule from "./layout/layout.module";

import {SearchService} from "./services/service.search";

export default angular
    .module("core", [

        layoutModule

    ])

    .service("searchService", SearchService)
    .name;
