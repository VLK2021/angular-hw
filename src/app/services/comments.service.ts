import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfsces/IComment";


@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  private url='https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) { }


  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this.url)
  }
}
