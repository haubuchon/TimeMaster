import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user.model';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    users: User;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = JSON.parse(localStorage.getItem('currentUser'));

    }
}