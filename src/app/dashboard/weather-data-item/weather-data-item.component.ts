import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWatherDataItem } from '../../core/services/interfaces/weather-data-item.iface';

@Component({
  selector: 'app-weather-data-item',
  templateUrl: './weather-data-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDataItemComponent {
  @Input() item: IWatherDataItem | null = null;
}
