import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetLearningComponent } from './alphabet-learning.component';

describe('AlphabetLearningComponent', () => {
  let component: AlphabetLearningComponent;
  let fixture: ComponentFixture<AlphabetLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
