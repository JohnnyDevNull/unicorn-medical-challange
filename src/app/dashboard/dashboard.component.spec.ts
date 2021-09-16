import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TrustHtmlPipe } from '../core/pipes';
import { DashboardComponent } from './dashboard.component';
import { StackListComponent } from './stack-list';
import { StackListItemComponent } from './stack-list-item';
import { WeatherDataItemComponent } from './weather-data-item';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [
        DashboardComponent,
        StackListComponent,
        StackListItemComponent,
        WeatherDataItemComponent,
        TrustHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
