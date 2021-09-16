export interface IWeatherDataItem {
  Datum: string;

  Zeit: string;

  /**
   * Unit: °C
   */
  'Temp. A.': number;

  /**
   * Unit: °C
   */
  'Temp. 3': number;

  /**
   * Unit: %
   */
  'Feuchte A.': number;

  /**
   * Unit: hPa
   */
  Luftdruck: number;

  /**
   * Unit: mm
   */
  Regen: number;

  /**
   * Unit: km/h
   */
  Wind: number;

  /**
   * Unit: °
   */
  Richtung: number;

  /**
   * Unit: h
   */
  Helligkeit: number;
}
