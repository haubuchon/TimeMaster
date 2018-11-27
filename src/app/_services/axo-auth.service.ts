import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Auth } from '../_models/auth';
import { map, catchError } from 'rxjs/operators'

const API_URL = 'https://axosoft.concerti.com/api/oauth2/token';
const CID = '88730934-9f17-45b5-8dae-d6cb854d3d9f';
const CS = 'KFvTJ0JLfBUXeyMjieZFKP8xTB6c1gdjQkx344hBbEnCTVdnQwmA6VxvcZlo9vasQxUE8dESvWaUukASiqxUVSMth54XOz0b5Hhu';

@Injectable({
  providedIn: 'root'
})
export class AxoAuthService {

  constructor(private http: HttpClient) { }

  getAuth(username: any, password: any): Observable<Auth> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams({
        fromObject: {
          'grant_type': 'password',
          'username': username,
          'password': password,
          'client_id': CID,
          'client_secret': CS
        }
      })
    };

    return this.http.get<Auth>(API_URL, httpOptions).pipe(map(data => data));
    // .catch(this.handleError);
  }
}
