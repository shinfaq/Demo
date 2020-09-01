import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BASE_URL = "http://localhost:3000/user";
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<any[]> {
    return this.http.get(this.BASE_URL, this.httpOptions).pipe(
      catchError(e => throwError(e)),
      map((res: any) => {
        return res;

      })
    )
  }
}
