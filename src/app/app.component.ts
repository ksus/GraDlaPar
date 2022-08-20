import { Component } from '@angular/core';
import { QuestionsService } from './services/questions.service';
import { Question } from './models/question';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private questions: QuestionsService) {
  }

  // variables
  questRandom: Question[];
  gameChoise: number = 0;
  step: number = 1;

  // -----------------------------------------------------
  start() {
    this.step = 2;
    this.questRandom = this.questions.getData(this.gameChoise);
  }

  // -----------------------------------------------------
  end() {
    this.step = 1;
    this.gameChoise = 0;
  }

}
