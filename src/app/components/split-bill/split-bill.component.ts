import {Component, Input, OnInit} from '@angular/core';

import {IFriend} from "../../../interfaces/IFriend";


@Component({
  selector: 'app-split-bill',
  templateUrl: './split-bill.component.html',
  styleUrls: ['./split-bill.component.css']
})


export class SplitBillComponent implements OnInit {
  @Input()
  splitBill: (value: any) => void;
  @Input()
  selectedFriend: IFriend;

  currentBill: number;
  whoIsPaying: string = 'user';
  paidByUser: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  get paidByFriend(): number | null {
    return this.currentBill ? Number(this.currentBill) - Number(this.paidByUser) : null;
  };

  onSplitBill(): void {
    if (!this.currentBill || this.paidByUser === null) return;

    const amount = this.whoIsPaying === 'user' ? this.paidByFriend : Number(-this.paidByUser);

    if (amount !== null) {
      this.splitBill(amount);
    }
  };

}




