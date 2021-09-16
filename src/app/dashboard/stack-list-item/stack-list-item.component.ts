import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISearchResultItem } from '../../core/services/interfaces';

@Component({
  selector: 'app-stack-list-item',
  templateUrl: './stack-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackListItemComponent {
  @Input() item: ISearchResultItem | null = null;
}
