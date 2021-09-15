import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherDataItemComponent } from './weather-data-item.component';

describe('WeatherDataItemComponent', () => {
  let component: WeatherDataItemComponent;
  let fixture: ComponentFixture<WeatherDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDataItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
