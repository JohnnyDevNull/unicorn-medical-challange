import { Component } from '@angular/core';
import { IMenuActionItem, IMenuItem } from './interfaces';
import { menuActionItems } from './menu-action-items';
import { menuItems } from './menu-items';

@Component({
  selector: 'ae-main-navigation',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public menuItems: Array<IMenuItem>;
  public actionItems: Array<IMenuActionItem>;

  constructor() {
    this.menuItems = menuItems;
    this.actionItems = menuActionItems;
  }

}
