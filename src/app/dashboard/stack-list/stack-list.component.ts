import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchResultItem, IWeatherDataItem } from '../../core/services/interfaces';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackListComponent {
  @Input() keyword: string | null = null;
  @Input() items: Array<any> | null = null;
  isStackListItem = (item: ISearchResultItem) => item?.title && item?.link;
  isWeatherItem = (item: IWeatherDataItem) => item?.Datum && item?.Zeit && item?.['Temp. 3'];
}
