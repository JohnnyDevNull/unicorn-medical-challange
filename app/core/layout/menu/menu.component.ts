import {IMenuItem, IMenuActionItem} from "./menu.interfaces";

interface IMainNavigationScope {

    menuItems: Array<IMenuItem>;

    onItemClick(item: IMenuItem);

    isActive(stateName: string): boolean;
}

class MainNavigationCtrl implements IMainNavigationScope {

    public menuItems: Array<IMenuItem>;

    public actionItems: Array<IMenuActionItem>;

    // @ngInject
    constructor(private $state: angular.ui.IStateService) {

        this.menuItems = [{
            title: "Dashboard",
            icon: "home",
            state: "dashboard"
        }];

        this.actionItems = [{
            link: "https://wiki.redmedical.de/x/gIE4",
            icon1: "square",
            icon2: "phone",
            title: "Hilfe"
        }];

    }

    onItemClick(item: IMenuItem) {
        this.$state.go(item.state);
    }

    isActive(stateName: string): boolean {
        return stateName === this.$state.current.name;
    }

}

export class RedMainNavigation implements ng.IComponentOptions {

    public template: string = require("./menu.component.html");

    public controller = MainNavigationCtrl;

    public controllerAs: string = "vm";

    static factory(): ng.IComponentOptions {
        return new RedMainNavigation();
    }

}
