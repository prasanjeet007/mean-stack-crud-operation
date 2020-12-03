import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  loginText: string;
  constructor(private _router: Router, private _auth: AuthService) {
    this._auth.isLogin.subscribe(res => {
      this.login = res;
      this.loginText = this.login ? 'Logout' : 'Login';
    });
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  logout() {
    this.login = false;
    this.loginText = 'Login';
   localStorage.removeItem('authenticate');
   this._router.navigateByUrl('/login');
  }

}
