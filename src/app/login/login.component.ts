import { AlertService } from './../services/alert.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  listUsers;
  user;
  pass;
  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((res) => {
      this.listUsers = res;
    });
  }
  login() {
    let k = false;
    this.listUsers.forEach((element) => {
      if (this.user == element.name) {
        if (this.pass == element.password) {
          this.alertService.showSuccessAlert('Login success');
          k = true;
          this.cookieService.set('id', this.user);
          setTimeout(() => {
            this.router.navigateByUrl('/home');
          }, 3000);
        } else {
          this.alertService.showErrorAlert('Your password not true!');
          k = true;
        }
      }
    });
    if (k == false) this.alertService.showErrorAlert('User does not exist!');
  }
}
