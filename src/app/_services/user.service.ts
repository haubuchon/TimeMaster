import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Users, User } from '../_models/user.model';
import { map, catchError } from "rxjs/operators"
import { AppConfig } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private APIURL: String;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.APIURL = AppConfig.settings.crtidata;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Error update');
  };

  getUser(id: string): Observable<User[]> {
    return this.http.get<Users>(this.APIURL + "/Users/" + id, this.httpOptions).pipe(map(data => data.users));
  }

  putUser(user: User): Observable<any> {
    return (this.http.put<User>(this.APIURL + "/Users/" + user.userID, user, this.httpOptions).pipe(catchError(this.handleError)))
  }
}



