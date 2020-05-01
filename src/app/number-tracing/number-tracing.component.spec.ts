import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTracingComponent } from './number-tracing.component';

describe('NumberTracingComponent', () => {
  let component: NumberTracingComponent;
  let fixture: ComponentFixture<NumberTracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberTracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
