import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})


export class BillComponent implements OnInit {
  bill: number = 0;
  selectYou: number = 0;
  selectFriend: number = 0;
  tip: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.calculateTip();
  }

  calculateTip(): void {
    this.tip = Number(this.bill) * ((Number(this.selectYou) + Number(this.selectFriend)) / 2 / 100);
  }

  reset() {
    this.bill = 0;
    this.selectYou = 0;
    this.selectFriend = 0;
    this.calculateTip();
  }
}
