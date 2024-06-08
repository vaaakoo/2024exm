import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  user: User = {
    id: 0,
    fullName: "",
    email: "",
    password: ""
  }
  
  constructor(private signupService: SignupService){}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.signupService.getUsers().subscribe(users => {
      console.log('Users:', users);
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  
  addUser() {
    if (!this.user.fullName?.trim() || !this.user.email?.trim() || !this.user.password?.trim()) {
      alert("fill please all field!");
      return;
    }
    this.signupService.addUser(this.user).subscribe(response => {
      alert("Successfuly Registered!" + this.user.fullName);
      this.user = {
        id: 0,
        fullName: "",
        email: "",
        password: ""
      }
      this.getUsers();
    }, error => {
      console.error('Error adding user:', error);
    });
  }
}