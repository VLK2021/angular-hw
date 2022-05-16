import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../components/interfaces/post.interface/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url= 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(this.url + '/' + id);
  }

}
