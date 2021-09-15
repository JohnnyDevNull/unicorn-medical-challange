import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LayoutModule } from './core/layout/layout.module';
import { SearchService } from './core/services/search.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StackListItemComponent } from './dashboard/stack-list-item/stack-list-item.component';
import { StackListComponent } from './dashboard/stack-list/stack-list.component';
import { SearchComponent } from './search/search.component';
import { TrustHtmlPipe } from './core/pipes/trust-html.pipe';
import { WeatherDataItemComponent } from './dashboard/weather-data-item/weather-data-item.component';

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
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
