import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../components/interfaces/user.interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url)
  }

  getUser(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.url + '/' + id);
  }

}
