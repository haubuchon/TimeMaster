import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Project } from '../_models/project';

const API_URL = 'https://axosoft.concerti.com/api/v6/projects';
const CID = '88730934-9f17-45b5-8dae-d6cb854d3d9f';
const CS = 'KFvTJ0JLfBUXeyMjieZFKP8xTB6c1gdjQkx344hBbEnCTVdnQwmA6VxvcZlo9vasQxUE8dESvWaUukASiqxUVSMth54XOz0b5Hhu';

@Injectable({
  providedIn: 'root'
})
export class AxoProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project> {
    var token = JSON.parse(localStorage.getItem('currentUser')).access_token;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.get<Project>(API_URL, httpOptions).pipe(map(data => data));
    // .catch(this.handleError);
  }
}
