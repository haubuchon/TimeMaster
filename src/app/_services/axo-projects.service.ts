import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { ProjectDtl } from '../_models/project-dtl';
import { AxoUsers } from '../_models/axo-users';
import { AxoFeatures } from '../_models/axo-features';
import { AppConfig } from './config.service';

const CID = '88730934-9f17-45b5-8dae-d6cb854d3d9f';
const CS = 'KFvTJ0JLfBUXeyMjieZFKP8xTB6c1gdjQkx344hBbEnCTVdnQwmA6VxvcZlo9vasQxUE8dESvWaUukASiqxUVSMth54XOz0b5Hhu';

@Injectable({
  providedIn: 'root'
})
export class AxoProjectService {

  currentProject: Subject<ProjectDtl> = new BehaviorSubject<ProjectDtl>(null);
  public pd: any;
  private httpOptions: object;
  private axoURL: string;

  constructor(private http: HttpClient) {
    this.axoURL = AppConfig.settings.axosoft + "/v6";
    var token = JSON.parse(localStorage.getItem('axoUser')).access_token;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
  }

  getProjects<Project>(): Observable<Project> {
    return this.http.get<Project>(this.axoURL + '/projects', this.httpOptions).pipe(map(data => data));
  }

  getProjectDetails(): Observable<ProjectDtl> {
    return this.currentProject.asObservable();
  }

  sendProjectDetail<ProjectDtl>(id: String) {
    this.http.get<ProjectDtl>(this.axoURL + '/projects/' + id, this.httpOptions).subscribe(resp => {
      this.currentProject.next(<any>resp);
    });
  }

  getUsers<User>() {
    var params: String = '?include_inactive=false'
    return this.http.get<AxoUsers>(this.axoURL + '/users' + params, this.httpOptions).pipe(map(data => data.data));
  }

  getFeatures<Feature>() {
    var params: String = '?include_inactive=false&columns=estimated_duration.duration_minutes,assigned_to,customer,project,status,custom_214,start_date,name,description&filter_id=1095'
    return this.http.get<AxoFeatures>(this.axoURL + '/features' + params, this.httpOptions).pipe(map(data => data.data));
  }
}
