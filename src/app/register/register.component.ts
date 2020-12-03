import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  constructor(private formBuilder: FormBuilder, private _auth: AuthService) {
    this.registerFormIntialize();
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  registerFormIntialize() {
   this.registerForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: [null, Validators.required],
    cpassword: [null, Validators.required]
   }, {validator: this.passwordConfirming});
  }
  // tslint:disable-next-line: typedef
  passwordConfirming(c: AbstractControl): { [key: string]: boolean } | null {
    const password = c.get('password');
    const cpass = c.get('cpassword');
    return password && cpass && password.value !== cpass.value ? {'misMatch': true} : null;
}
// tslint:disable-next-line: typedef
submitRegisterForm(value: any) {
 const data = {
   fname: value.firstname,
   lname: value.lastname,
   email: value.email,
   phone: value.phone,
   pass: value.password,
   cpass: value.cpassword
 };
//  console.log(value);
 this._auth.registration(data).subscribe(res => {
   console.log(res);
   this.registerForm.reset();
 }, err => {
   console.log(err);
 });
}
}
