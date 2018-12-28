import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-navig',
  templateUrl: './navig.component.html',
  styleUrls: ['./navig.component.scss']
})
export class NavigComponent implements OnDestroy {

  loggedIn: boolean = false;
  subscription: Subscription;
  private users = JSON.parse(localStorage.getItem('currentUser'));

  items =
    [
      { "desc": "Home", "link": "" , "active": true},
      { "desc": "Grille", "link": "/grid", "active": true },
      { "desc": "Contrôles", "link": "kendo-demo", "active": true },
      { "desc": "Planner", "link": "/planner", "active": true },
      { "desc": "Axosoft API", "link": "/axo", "active": true },
      { "desc": "User maintenance", "link": "/users","active": true },
      { "desc": "Projets", "link": "/projects","active": true },
      { "desc": "Logout", "link": "/login","active": true }
    ]

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.loggedIn = (message.text == 'login');
      this.users = JSON.parse(localStorage.getItem('currentUser'));
      this.items.forEach((element, index) => {
          this.items[index].active = (element.link == '/users' ? this.users[0].isAdmin == true : true);
      });
     });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
