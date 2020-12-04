import { Router } from '@angular/router';
import { registerPlugin } from '@scullyio/scully';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private _auth: AuthService, private _router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  loginFormSubmit(data: any) {
    const value = {
      email: data.email,
      pass: window.btoa(data.password)
    };
    this._auth.loginSubmit(value).subscribe(res => {
      localStorage.setItem('authenticate', JSON.stringify(res));
      this._auth.isLogin.next(true);
      this.loginForm.reset();
      this._router.navigateByUrl('/list');
    }, err => {
      console.log(err.error.error);
    });
  }
}
