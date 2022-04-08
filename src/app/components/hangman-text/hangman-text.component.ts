import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-text',
  templateUrl: './hangman-text.component.html',
  styleUrls: ['./hangman-text.component.scss'],
})
export class HangmanTextComponent implements OnInit, OnChanges {
  @Input() question: string = '';
  @Input() guesses: string[] = [];
  public guessedText: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('question txt', this.question);
    console.log('guesses txt', this.guesses);
    if (!this.guesses.length) {
      this.fillWithEmpty();
    } else {
      this.fillWithLetter();
    }
    console.log('guessedText txt', this.guessedText);
  }

  public fillWithEmpty() {
    let starterText: string[] = [];
    this.question.split('').forEach((element, index) => {
      starterText[index] = '□';
    });
    this.guessedText = starterText;
  }

  public fillWithLetter() {
    let updatedText: string[] = [];
    this.question.split('').forEach((element, index) => {
      if (this.guesses.includes(element)) {
        updatedText[index] = element;
      } else {
        updatedText[index] = '□';
      }
    });
    this.guessedText = updatedText;
  }
}