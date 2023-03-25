import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../interfsces/IComment";
import {urls} from "../../constants/urls";


@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments);
  }
}
