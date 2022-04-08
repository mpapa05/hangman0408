import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const defaultJSONPath = 'assets/words.json';

@Injectable({
  providedIn: 'root',
})
export class HangmanService {
  constructor(private http: HttpClient) {}

  getQuestions(jsonPath: string = defaultJSONPath) {
    return this.http.get<{ items: string[] }>(jsonPath);
  }
}