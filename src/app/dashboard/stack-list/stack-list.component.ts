import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchResultItem } from '../../core/services/interfaces';
import { IWatherDataItem } from '../../core/services/interfaces/weather-data-item.iface';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackListComponent {
  @Input() keyword: string | null = null;
  @Input() items: Array<any> | null = null;
  isStackListItem = (item: ISearchResultItem) => item?.title && item?.link;
  isWeatherItem = (item: IWatherDataItem) => item?.Datum && item?.Zeit && item?.['Temp. 3'];
}
