import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
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
  setSelectedFriend: (friend: IFriend) => void;
  @Input()
  selectedFriend: IFriend;

  isSelected: boolean;

  constructor() {}

  ngOnInit(): void {
    this.changeIsSelected();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFriend'] || changes['friend']) {
      this.changeIsSelected();
    }
  }

  changeIsSelected(): void {
    this.isSelected = this.selectedFriend && this.friend
      ? this.selectedFriend.id === this.friend.id
      : false;
  }

}
