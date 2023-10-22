import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})


export class CounterComponent implements OnInit, OnDestroy {

  counter = 0;
  timer = 0;
  private timerInterval: any;


  constructor() {
  }


  ngOnInit(): void {
    this.timerInterval = setInterval(() => {
      this.timer = this.timer + 1;
    }, 1500)
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }


  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }

  reset() {
    this.counter = 0;
  }

}
