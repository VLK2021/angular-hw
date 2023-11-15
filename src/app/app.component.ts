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
  friends: IFriend[];


  ngOnInit(): void {
    this.friends = InitialFriends;
  }


  changeShowAddFriends() {
    this.showAddFriend = !this.showAddFriend;
  }

  addFriend = (friend: IFriend): void => {
    this.friends = [...this.friends, friend];
  }

}
