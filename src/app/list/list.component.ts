import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userData: any;
  constructor(private _auth: AuthService) {
    this._auth.isLogin.next(true);
    this._auth.getResgisterUser().subscribe(res => {
      this.userData = res;
      console.log(res);
    });
   }

  ngOnInit(): void {
  }

}
