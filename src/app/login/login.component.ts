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
  constructor(private _auth: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  loginFormSubmit(data: any) {
    const value ={
      email: data.value,
      pass: data.password
    }
    this._auth.loginSubmit(value).subscribe(res => {
      console.log(res);
      this.loginForm.reset();
    }, err => {
      console.log(err.error.error);
    });
  }
}
