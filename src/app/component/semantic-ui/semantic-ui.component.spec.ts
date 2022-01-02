import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SemanticUIComponent } from './semantic-ui.component';

describe('SemanticUIComponent', () => {
  let component: SemanticUIComponent;
  let fixture: ComponentFixture<SemanticUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanticUIComponent ],
      imports: [ HttpClientModule ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
