import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = "";
  isLogin = false;
  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    if(this.cookieService.get("id")){
     this.user = this.cookieService.get("id");
     this.isLogin = true;
    }
  }

}
