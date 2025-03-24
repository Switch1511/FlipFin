import { TestBed } from '@angular/core/testing';
import { AnnotationsComponent } from './annotations.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotationsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AnnotationsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
