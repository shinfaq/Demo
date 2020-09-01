import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = '';
  isLogin = false;
  constructor(
    private cookieService: CookieService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    if (this.loginService.events$) {
      this.loginService.events$.forEach((i) => {
        if (i != '') {
          this.user = i;
          this.isLogin = true;
        } else {
          this.user = '';
          this.isLogin = false;
        }
        console.log(i);
        
      });
    }
  }
  logout() {
    this.isLogin = false;
  }
}
