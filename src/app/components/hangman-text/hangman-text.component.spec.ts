import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanTextComponent } from './hangman-text.component';

describe('HangmanTextComponent', () => {
  let component: HangmanTextComponent;
  let fixture: ComponentFixture<HangmanTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
