import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherDataService]
    });
    service = TestBed.inject(WeatherDataService);
  });

  test('should create', () => {
    expect(service).toBeTruthy();
  });
});
