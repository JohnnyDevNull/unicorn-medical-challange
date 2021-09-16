import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustHtmlPipe } from '../../core/pipes';
import { StackListItemComponent } from '../stack-list-item';
import { WeatherDataItemComponent } from '../weather-data-item';
import { StackListComponent } from './stack-list.component';

describe('StackListComponent', () => {
  let component: StackListComponent;
  let fixture: ComponentFixture<StackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StackListComponent,
        StackListItemComponent,
        WeatherDataItemComponent,
        TrustHtmlPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
