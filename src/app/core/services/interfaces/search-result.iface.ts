import { ISearchResultItem } from './search-result-item.iface';

export interface ISearchResult {
  items: ISearchResultItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
