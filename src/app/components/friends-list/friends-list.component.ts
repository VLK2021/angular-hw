import {Component, Input, OnInit} from '@angular/core';

import {IFriend} from "../../../interfaces/IFriend";


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})


export class FriendsListComponent implements OnInit {
  @Input()
  friends: IFriend[];
  @Input()
  changeShowAddFriends: () => void;
  @Input()
  showAddFriend: boolean;


  constructor() { }

  ngOnInit(): void {
  }


}
