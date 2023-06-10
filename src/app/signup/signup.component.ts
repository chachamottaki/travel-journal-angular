import { Component } from '@angular/core';
import { UserService } from '../user.service'
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm:FormGroup;

  constructor(private userservice: UserService, private formBuilder: FormBuilder){
    this.signupForm = this.formBuilder.group({
      firstname:'',
      lastname:'',
      email: '',
      password: ''
    });
  }

  signup(){
    const fname = (<string>this.signupForm.get('firstname')?.value);
    const lname = (<string>this.signupForm.get('lastname')?.value);
    const email = (<string>this.signupForm.get('email')?.value);
    const password = (<string>this.signupForm.get('password')?.value);
    
      this.userservice.addUser(fname, lname, email, password).subscribe(
        result =>{
          console.log(fname,lname,email);
          this.signupForm.reset();
      })
  }
}
