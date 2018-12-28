import { Component, OnInit } from '@angular/core';
import { AxoAuthService } from '../_services/axo-auth.service';

@Component({
  selector: 'app-axo-test',
  templateUrl: './axo-test.component.html',
  styleUrls: ['./axo-test.component.scss']
})
export class AxoTestComponent implements OnInit {

  constructor(private authService: AxoAuthService) { }

  public username: String = 'hugues.aubuchon@concerti.com';
  public password: String = '';
  public token: String = '';
  public firstName: String = '';
  public lastName: String = '';
  public email: String = '';
  public loginFailed: Boolean = false;

  login() {
    this.authService.getAuth(this.username, this.password).subscribe(
      data => {
        this.token = data.access_token;
        this.firstName = data.data.first_name;
        this.lastName = data.data.last_name;
        this.email = data.data.email;
        this.loginFailed = false;
        localStorage.setItem('axoUser', JSON.stringify(data));
      },
      err => {
        this.loginFailed = true;
        console.log("Oups !: " + err);
      });
  }

  ngOnInit() {

  }

}
