import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class ExchangeService {
  private url = 'https://api.frankfurter.app/latest?';

  constructor(private http: HttpClient) {
  }

  getResult(amount: string, fromCur: string, toCur: string): Observable<any> {
    return this.http.get<any>(this.url + `amount=${amount}&from=${fromCur}&to=${toCur}`)
  }


}
