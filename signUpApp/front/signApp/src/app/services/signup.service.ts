import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  user: User[] = [];

  constructor(private http: HttpClient) { }

  // registerUser(user: User): Observable<any>  {
    
  //   return 
  // }
  
}
