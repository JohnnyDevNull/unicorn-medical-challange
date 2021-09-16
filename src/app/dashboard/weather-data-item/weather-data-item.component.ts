import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherUnits } from '../../core/constants';
import { IWeatherDataItem } from '../../core/services/interfaces';

@Component({
  selector: 'app-weather-data-item',
  templateUrl: './weather-data-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDataItemComponent {
  private units: any = WeatherUnits;
  @Input() item: IWeatherDataItem | null = null;
  compareFn = () => 0;
  getUnit(key: string): string {
    return this.units[key] ? this.units[key] : null;
  }
}
