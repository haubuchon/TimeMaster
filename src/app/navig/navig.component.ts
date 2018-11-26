import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => 
        { 
          this.loggedIn = (message.text == 'login'); 
        });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
