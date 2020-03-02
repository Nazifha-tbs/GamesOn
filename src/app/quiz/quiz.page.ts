import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as firebase from 'firebase';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  quiz: any;
  index = 0;
  ref: any;
  quizList: any;
  score: number;
  total: number;
  question: any;
  options: any;

  @ViewChild('selectedAns', { static: false }) selectedAns: ElementRef;

  constructor() {
    this.ref = firebase.database().ref('data/');
    this.GetQuiz();
  }

  ngOnInit() {
    this.score = 0;
  }
  GetQuiz() {
    this.ref.on('value', (snapshot) => {
      this.quizList = snapshot.val();
      this.total = this.quizList.length;
      this.question = this.quizList[this.index].Question;
      this.options = this.quizList[this.index].options;
    });
  }
  selected(val) {
    for (let j = 0; j < this.quizList.length; j++) {
      if (this.index == j && !this.quizList[j].answered) {
        console.log(this.index);
        for (let i = 0; i < this.quizList[j].options.length; i++) {
          if (val == i) {
            let id = document.getElementById('selectedAns' + this.index + val);
            console.log(id)
            if (this.quizList[j].options[i].isAnswer == true) {
              this.quizList[j].answered = true;
              id.className = "correct";
              this.score++;
            } else {
              this.quizList[j].answered = true;
              id.className = "inCorrect";
            }
          }
        }
      }
    }
  }

  next() {
    let next = document.getElementById('next');
    this.index = this.index + 1;
    if (this.index <= 9) {
      this.question = this.quizList[this.index].Question;
      this.options = this.quizList[this.index].options;
    } else {
      this.question = 'Your Score : ' + this.score;
      this.options = null;
      next.textContent = 'submit'
    }
  }
}
