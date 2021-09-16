import { Observable } from 'rxjs';
import { ISearchResultItem, IWeatherDataItem } from '../core/services/interfaces';

export interface StackListConfig {
  keyword: string;
  items: Observable<Array<ISearchResultItem | IWeatherDataItem>>;
}
