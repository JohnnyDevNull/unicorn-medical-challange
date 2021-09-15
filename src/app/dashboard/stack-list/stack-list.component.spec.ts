import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustHtmlPipe } from '../../core/pipes/trust-html.pipe';
import { StackListItemComponent } from '../stack-list-item/stack-list-item.component';
import { StackListComponent } from './stack-list.component';

describe('StackListComponent', () => {
  let component: StackListComponent;
  let fixture: ComponentFixture<StackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StackListComponent,
        StackListItemComponent,
        TrustHtmlPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
