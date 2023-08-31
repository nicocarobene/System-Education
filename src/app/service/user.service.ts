import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BASEURL } from './helper';
import { User } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  
  
  public addUser(user: any ){
    return this.httpClient.post<User>(`${BASEURL}/api/v1/user`, user)
  }
}
