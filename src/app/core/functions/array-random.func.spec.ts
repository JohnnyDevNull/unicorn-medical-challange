import { ArrayRandom } from './array-random.func';
import weatherData from '../../../../cypress/fixtures/weatherdata.json';

describe('ArrayRandom', () => {

  test('should return a random sample', () => {
    const sample1 = ArrayRandom(weatherData, 10);
    expect(sample1.length).toBe(10);

    const sample2 = ArrayRandom(weatherData, 10);
    expect(sample2.length).toBe(10);

    expect(sample1).not.toEqual(sample2);
  });

});
