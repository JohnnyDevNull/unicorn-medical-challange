import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustHtmlPipe } from '../../core/pipes/trust-html.pipe';
import { StackListItemComponent } from './stack-list-item.component';

describe('StackListItemComponent', () => {
  let component: StackListItemComponent;
  let fixture: ComponentFixture<StackListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StackListItemComponent,
        TrustHtmlPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
