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
  friends: IFriend[] = InitialFriends || [];


  changeShowAddFriends() {
    this.showAddFriend = !this.showAddFriend;
  }

  addFriend(friend: any): void {
    this.friends = [...this.friends, friend];
  }

}
