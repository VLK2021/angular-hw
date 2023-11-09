import { Component, OnInit } from '@angular/core';

import {IQuestion} from "../../interfaces/iquestion";
import {questions} from "../../constants/questions";



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})



export class QuestionsComponent implements OnInit {

  questions: IQuestion[];
  contentId: number | null = null;


  constructor() { }

  ngOnInit(): void {
    this.questions = questions
  }


  changeId(id: number): void {
    this.contentId = id !== this.contentId ? id : null;
  }
}
