import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SearchService]
    });
    service = TestBed.inject(SearchService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  test('buildUrlWithParams should create the api url', () => {
    let params = {
      pagesize: 10,
      order: 'desc',
      sort: 'creation_date',
      site: 'stackoverflow'
    };
    let expected = 'https://api.stackexchange.com/2.2/search?pagesize=10&order=desc&sort=creation_date&site=stackoverflow&intitle=TypeScript';
    expect(service.buildUrlWithParams(params, 'TypeScript')).toBe(expected);

    params = {
      pagesize: 20,
      order: 'asc',
      sort: 'activity',
      site: 'serverfault'
    };
    expected = 'https://api.stackexchange.com/2.2/search?pagesize=20&order=asc&sort=activity&site=serverfault&intitle=Linux';
    expect(service.buildUrlWithParams(params, 'Linux')).toBe(expected);
  });
});
