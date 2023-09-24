import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserElement, UserLogin } from '../utils/types';
import { BASEURL } from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }
  public generateToken(user: UserLogin) {
    return this.http.post<any>(`${BASEURL}/auth/login`, user);
  }

  public loginUser(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  public isLoggedIn(){
    const tokenStr = localStorage.getItem('jwtToken');
    if(tokenStr === null || tokenStr === undefined || tokenStr.length === 0) return false;
    return true;
  }

  public logoutUser(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
  }

  public getToken(){
    return localStorage.getItem('jwtToken');
  }
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user))
  }
  
  public getUser(){
    const userStr = localStorage.getItem('user');
    if(userStr === null || userStr === undefined || userStr.length === 0) return null;
    return JSON.parse(userStr);
  }
  public getUserRole(){
    const user = this.getUser();
    return user;
  } 
  public getCurrentUser(){
    const user= this.http.get<UserElement>(`${BASEURL}/auth/current-user`,{
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
    return user;
  }

}
