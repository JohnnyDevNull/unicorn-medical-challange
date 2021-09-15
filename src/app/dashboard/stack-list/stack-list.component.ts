import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchResultItem } from 'src/app/core/services/interfaces';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackListComponent {
  @Input() keyword: string | null = null;
  @Input() items: ISearchResultItem[] | null = null;
}
