import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './core/layout';
import { TrustHtmlPipe } from './core/pipes';
import { SearchService } from './core/services';
import { DashboardComponent } from './dashboard';
import { StackListComponent } from './dashboard/stack-list';
import { StackListItemComponent } from './dashboard/stack-list-item';
import { WeatherDataItemComponent } from './dashboard/weather-data-item';
import { SearchComponent } from './search';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,
        StackListComponent,
        StackListItemComponent,
        WeatherDataItemComponent,
        TrustHtmlPipe
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        SearchService
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
