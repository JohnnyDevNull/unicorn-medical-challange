import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './core/layout/layout.module';
import { TrustHtmlPipe } from './core/pipes/trust-html.pipe';
import { SearchService } from './core/services/search.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StackListItemComponent } from './dashboard/stack-list-item/stack-list-item.component';
import { StackListComponent } from './dashboard/stack-list/stack-list.component';
import { SearchComponent } from './search/search.component';

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
