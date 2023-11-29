import {Component, OnInit} from '@angular/core';

import {ExchangeService} from "../../services/exchange.service";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})


export class ExchangeComponent implements OnInit {
  amount: string = '0';
  fromCur: string = 'USD';
  toCur: string = 'EUR';


  converted: string = '';


  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit(): void {

  }


  givResult() {
    if (this.fromCur === this.toCur) {
      this.converted = this.amount;
    }

    this.exchangeService.getResult(this.amount, this.fromCur, this.toCur).subscribe(value => {
      this.converted = value.rates[this.toCur];
    })
  }


}
