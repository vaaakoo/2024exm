import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'signApp';
  user: User = new User;
  
  constructor(private service: SignupService){}
  ngOnInit(): void {
  }

  addUser() {
    
  }
}
