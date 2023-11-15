import {Component, Input, OnInit} from '@angular/core';
import {IFriend} from "../../../interfaces/IFriend";


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})


export class FriendComponent implements OnInit {
  @Input()
  friend: IFriend
  @Input()
  changeShowAddFriends: () => void;
  @Input()
  showAddFriend: boolean;



  constructor() { }

  ngOnInit(): void {
  }



}
