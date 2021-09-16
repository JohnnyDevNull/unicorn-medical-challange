import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IWatherDataItem } from '../../core/services/interfaces/weather-data-item.iface';
import { WeatherUnits } from '../../core/services/weatherdata.units';

@Component({
  selector: 'app-weather-data-item',
  templateUrl: './weather-data-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherDataItemComponent {
  private units: any = WeatherUnits;
  @Input() item: IWatherDataItem | null = null;
  compareFn = () => 0;
  getUnit(key: string): string {
    return this.units[key] ? this.units[key] : null;
  }
}
