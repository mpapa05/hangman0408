import { Component, OnInit } from '@angular/core';
import { HangmanService } from './../../service/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  public jsonPath = 'assets/words.json';
  public questions: string[] = [];
  public questionLength: number = 0;
  public questionLengths: number[] = [];
  public question!: string;
  public finished = false;
  public guesses: string[] = [];
  public start = false;

  constructor(private HangmanService: HangmanService) { }

  ngOnInit(): void {
    this.HangmanService.getQuestions(this.jsonPath).subscribe((response) => {
      this.questions = response.items;
      this.getQuestionLengths();
      console.log(this.questions);
    })
  }

  public getQuestionLengths(): void{
    this.questions.forEach(question => {
      if(!this.questionLengths.includes(question.length)){
        this.questionLengths.push(question.length)
      }
    });
    console.log(this.questionLengths)
  }

  public getQuestionWithLength(event: any){
    console.log(event.questionLength);
    this.questionLength = event.questionLength;
    this.question = this.getQuestionsByLength(this.questionLength);
    this.start = true;
    console.log(this.question);
  }

  public getQuestionsByLength(length: number): string{
    const questionsByLength: string[] = [];
    this.questions.forEach(question => {
      if(question.length == length){
        questionsByLength.push(question);
      }
    });
    const questionIndex = Math.floor(Math.random() * questionsByLength.length);
    const question = questionsByLength[questionIndex];
    console.log(questionsByLength);
    return question;
  }

  guess(letter: string) {
    console.log(letter);
    this.guesses = [...this.guesses, letter];
  }

  restart(): void {
    this.guesses = [];
    this.questionLength = 0;
    this.question = '';
    // this.getNewQuestion();
    this.finished = false;
    this.start = false;
  }

  public onGameFinished(): void {
    this.finished = true;
  }
}
