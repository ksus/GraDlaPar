import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Question } from './question';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private questions: QuestionsService) {
  }

  questRandom: Question[];
  gameChoise = 0;
  step = 1;

  start() {
    this.step = 2;
    this.questRandom = this.questions.getData(this.gameChoise);
  }

  end() {
    this.step = 1;
    this.gameChoise = 0;
  }

}
