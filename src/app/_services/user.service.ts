import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Users, User } from '../_models/user.model';
import { map, catchError } from "rxjs/operators"

const API_URL = 'http://localhost:61017/api/Products';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

   getUser(id: string): Observable<User[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Users>(API_URL + "/" + id,httpOptions).pipe(map(data => data.users));
    // .catch(this.handleError);
  }
}



