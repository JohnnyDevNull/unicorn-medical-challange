import { ArrayLimit } from './array-limit.func';
import weatherData from '../../../../cypress/fixtures/weatherdata.json';

describe('ArrayLimit', () => {

  test('should return limited portion of the source data', () => {
    const sample1 = ArrayLimit(weatherData, 10);
    expect(sample1.length).toBe(10);

    const sample2 = ArrayLimit(weatherData, 20);
    expect(sample2.length).toBe(20);

  });

});
