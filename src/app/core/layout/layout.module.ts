import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    NavbarComponent,
    MenuComponent
  ],
  exports: [
    NavbarComponent,
    MenuComponent
  ]
})
export class LayoutModule {

}
