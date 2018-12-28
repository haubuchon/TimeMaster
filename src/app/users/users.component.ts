import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public user: User;

  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.user = Object.assign({
      'userID': 'haubuchon',
      'userName': '',
      'password': '',
      'email': '',
      'isAdmin': 1
    });
  }

  retrieveUser() {
    this.usersvc.getUser(this.user.userID).subscribe(u => { this.user = u[0] });
  }

  updateUser() {
    this.usersvc.putUser(this.user).subscribe();
  }

}
