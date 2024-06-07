import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  user: User = new User;
  
  constructor(){}
  ngOnInit(): void {
  }

  addUser(){
    console.log(this.user);
  }
}