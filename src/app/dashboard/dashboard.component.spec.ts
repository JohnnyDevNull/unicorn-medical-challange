import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TrustHtmlPipe } from '../core/pipes/trust-html.pipe';
import { DashboardComponent } from './dashboard.component';
import { StackListItemComponent } from './stack-list-item/stack-list-item.component';
import { StackListComponent } from './stack-list/stack-list.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [
        DashboardComponent,
        StackListComponent,
        StackListItemComponent,
        TrustHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
