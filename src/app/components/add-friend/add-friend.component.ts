import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})


export class AddFriendComponent implements OnInit {
  @Input()
  addFriend: (friend: any) => void;

  friendForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.friendForm = this.fb.group({
      name: ['', Validators.required],
      image: ['https://i.pravatar.cc/48', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  private generateRandomId(): string {
    return crypto.randomUUID();
  }

  handleSubmit() {
    if (this.friendForm.invalid) return;
    const id = this.generateRandomId();

    const {name, image} = this.friendForm.value;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0
    };

    this.addFriend(newFriend);

    this.friendForm.reset({
      name: '',
      image: 'https://i.pravatar.cc/48'
    });
  }

}
