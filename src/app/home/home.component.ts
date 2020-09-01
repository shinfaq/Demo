import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listUser = [];
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.events$) {
      this.loginService.events$.forEach((i) => {
        console.log(i);
        this.listUser.push(i);
      });
      console.log(this.listUser);
    }
  }
}
