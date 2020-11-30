import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const url = environment.base_Url;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  registration(data: any) {
    return this.http.post(url  + 'registers', data);
  }
  loginSubmit(data: any) {
    return this.http.post(url  + 'login', data);
  }
}
