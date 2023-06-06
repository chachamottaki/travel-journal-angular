import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  // formGroup:FormGroup;

  //form function
  // submit(){
  //   console.log("form submitted :)")
  // }

  getLoginFromService(){
    // this.email, this.password = this.userservice.login(email,password)
  }

  constructor(private userservice: UserService){}

  ngOnInit(): void {
    
  }
}
