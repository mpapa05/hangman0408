import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanSvgComponent } from './components/hangman-svg/hangman-svg.component';
import { HangmanTextComponent } from './components/hangman-text/hangman-text.component';
import { HangmanKeyboardComponent } from './components/hangman-keyboard/hangman-keyboard.component';
import { HangmanComponent } from './components/hangman/hangman.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanSvgComponent,
    HangmanTextComponent,
    HangmanKeyboardComponent,
    HangmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
