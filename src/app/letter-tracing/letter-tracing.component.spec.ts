import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterTracingComponent } from './letter-tracing.component';

describe('LetterTracingComponent', () => {
  let component: LetterTracingComponent;
  let fixture: ComponentFixture<LetterTracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterTracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
