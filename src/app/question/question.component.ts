import { Component, OnInit, Input, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Question } from '../models/question';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger('anime', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1)'
      })),

      transition('small <=> large', animate('500ms', keyframes([
        style({ opacity: 0, transform: 'translateY(-200%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35%)', offset: .5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))),
    ])
  ]
})
export class QuestionComponent implements OnInit {


  @Input()
  dataQuestions: Question[];

  // variables
  currentQuestion: Question;
  lengthQuestions: number;
  index = 0;
  step = 0;
  flagButton: true;
  state = true;

  // -----------------------------------------------------
  constructor() { }

  // -----------------------------------------------------
  ngOnInit() {
    this.currentQuestion = this.dataQuestions[this.index];
    this.lengthQuestions = this.dataQuestions.length;
    this.countStep();
    this.toggle();
  }

  // -----------------------------------------------------
  toggle() {
    this.state = !this.state;
  }

  // -----------------------------------------------------
  countStep() {
    this.step = 100 / this.lengthQuestions * (this.index + 1);
  }

  // -----------------------------------------------------
  next() {
    this.toggle();
    this.index++;
    if (!(this.index >= this.lengthQuestions)) {
      this.currentQuestion = this.dataQuestions[this.index];
      this.countStep();
      if (this.step >= 100) {
        this.flagButton = true;
      }
    }
  }
  // -----------------------------------------------------
}
