import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-split-bill',
  templateUrl: './split-bill.component.html',
  styleUrls: ['./split-bill.component.css']
})


export class SplitBillComponent implements OnInit {
  @Input()
  splitBill: (value: any) => void;


  constructor() { }

  ngOnInit(): void {
  }

}
