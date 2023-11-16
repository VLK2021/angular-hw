import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {FriendsListComponent} from './components/friends-list/friends-list.component';
import {FriendComponent} from './components/friend/friend.component';
import {AddFriendComponent} from './components/add-friend/add-friend.component';
import {SplitBillComponent} from './components/split-bill/split-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    FriendComponent,
    AddFriendComponent,
    SplitBillComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
