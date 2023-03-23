import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IUser} from "../interfsces/IUser";


@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient:HttpClient) {
  }

  getUser(id:number): Observable<IUser> {
    return this.httpClient
      .get<IUser>(this.url + '/' + id)
  }

}
