import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { appMockData } from '@app-mock';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './core/layout';
import { TrustHtmlPipe } from './core/pipes';
import { MOCK_DATA } from './core/tokens/mock-data.token';
import { DashboardComponent } from './dashboard';
import { StackListComponent } from './dashboard/stack-list';
import { StackListItemComponent } from './dashboard/stack-list-item';
import { WeatherDataItemComponent } from './dashboard/weather-data-item';
import { SearchComponent } from './search';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    StackListComponent,
    StackListItemComponent,
    TrustHtmlPipe,
    WeatherDataItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MOCK_DATA,
      useValue: appMockData
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
