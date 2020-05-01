import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPairsComponent } from './letter-pairs.component';

describe('LetterPairsComponent', () => {
  let component: LetterPairsComponent;
  let fixture: ComponentFixture<LetterPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
