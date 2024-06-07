import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  user: User = new User;
  
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
    this.signupService.addUser(this.user).subscribe(response => {
      console.log('User added:', response);
      this.getUsers();
    }, error => {
      console.error('Error adding user:', error);
    });
  }
}