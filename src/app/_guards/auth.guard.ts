﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessageService } from '../_services/message.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private messageService: MessageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.messageService.sendMessage('login');
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.messageService.sendMessage('logout');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}