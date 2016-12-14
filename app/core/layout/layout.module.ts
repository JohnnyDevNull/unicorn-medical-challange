import * as angular from "angular";

import {redNavbarDirective} from "./navbar/navbar.directive";
import {RedMainNavigation} from "./menu/menu.component";

export default angular
    .module("layoutModule", [])

    .component("aeMainNavigation", RedMainNavigation.factory())
    .directive("aeNavbar", redNavbarDirective)
    .name;
