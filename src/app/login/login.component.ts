import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private userservice: UserService, private formBuilder: FormBuilder){
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {}

  login(){
    const email = (<string>this.loginForm.get('email')?.value);
    const password = (<string>this.loginForm.get('password')?.value);
    // console.log(email,password);
      this.userservice.login(email, password).subscribe(
        result =>{
          localStorage.setItem('token', result.token);
          console.log("token: ",result.token);
          this.loginForm.reset();
      })
  }
}
