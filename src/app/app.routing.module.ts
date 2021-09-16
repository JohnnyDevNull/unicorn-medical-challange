import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { SearchComponent } from './search';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'search', component: SearchComponent },
  { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
