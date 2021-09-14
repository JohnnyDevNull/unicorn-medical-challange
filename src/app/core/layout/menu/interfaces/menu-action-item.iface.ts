import { IAbstractMenuItem } from './abstract-menu-item.iface';

export interface IMenuActionItem extends IAbstractMenuItem {
  link: string;
  icon1: string;
  icon2: string;
}
