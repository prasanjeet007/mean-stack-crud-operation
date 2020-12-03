import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const url = environment.base_Url;
const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  isLogin = new BehaviorSubject(null);
  registration(data: any) {
    return this.http.post(url  + 'registers', data);
  }
  loginSubmit(data: any) {
    return this.http.post(url  + 'login', data);
  }
  getResgisterUser() {
    return this.http.get(url + 'registers');
  }
}
