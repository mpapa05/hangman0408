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
  }
}
