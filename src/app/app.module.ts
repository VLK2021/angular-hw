import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {HomeComponent} from './components/home/home.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomeComponent},

      {
        path: 'users-page', component: UsersComponent,
        children:
          [{path: 'user-details/:id', component: UserDetailsComponent}]
      },

      {
        path: 'posts-page', component: PostsComponent,
        children:
          [{path: 'post-details/:id', component: PostDetailsComponent}]
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
