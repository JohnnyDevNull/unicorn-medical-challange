import { Component } from '@angular/core';
import { SearchService } from './core/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private searchService: SearchService) {}

  triggerService(): void {
    this.searchService.search('angular2').subscribe((res) => {
      console.log('API RESULT', res);
    });
  }

}
