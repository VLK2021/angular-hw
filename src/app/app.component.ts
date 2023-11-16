import { Component } from '@angular/core';

import {IFriend} from "../interfaces/IFriend";
import {InitialFriends} from "../constants/initialFriends";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  showAddFriend: boolean = false;
  showSplitBill: boolean = false;
  selectedFriend: any;

  friends: IFriend[];


  ngOnInit(): void {
    this.friends = InitialFriends;
  }


  changeShowAddFriends() {
    this.showAddFriend = !this.showAddFriend;
  };

  addFriend = (friend: IFriend): void => {
    this.friends = [...this.friends, friend];
  };

  splitBill = (value: any) => {
    this.friends = this.friends.map(obj => obj.id === this.selectedFriend.id ? {...obj, balance: obj.balance + value} : obj);
    this.selectedFriend = null;
  };

  setSelectedFriend = (friend: IFriend) => {
    this.selectedFriend = friend;
    this.showSplitBill = !this.showSplitBill;


  }



}
