import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users, User } from '../_models/user.model';
import { MessageService } from '../_services/message.service';
import { AppConfig } from './config.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private APIURL: string;

    constructor(private http: HttpClient, private messageService: MessageService) {
        this.APIURL = AppConfig.settings.crtidata + "/v6";
    }

    login(username: string, password: string) {
        return this.http.get<Users>(this.APIURL + '/Users/' + username)
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    if (user.users[0].password = window.btoa(password)) {
                        localStorage.setItem('currentUser', JSON.stringify(user.users));
                    }

                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.messageService.sendMessage('logout');
        localStorage.removeItem('currentUser');
    }
}