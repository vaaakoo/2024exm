import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0,
    fullName: "",
    email: "",
    password: ""
  }
  
  constructor(private signupService: SignupService){}
  ngOnInit(): void {
  }

  loginUser() {
    debugger;
    if (!this.user.email?.trim() || !this.user.password?.trim()) {
      alert("Please fill all fields!");
      return;
    }
    this.signupService.loginUser(this.user).subscribe(response => {
      alert(response); 
      console.log('Login response:', response);
    }, error => {
      console.error('Error logging in:', error);
      alert("Invalid credentials, please try again.");
    });
  }
}
