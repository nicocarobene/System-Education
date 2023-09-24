import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from './helper';
import { Category } from '../utils/types';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private token= this.loginService.getToken()
  constructor(private http: HttpClient, private loginService: LoginService) { }

  public getCategories() {
    return this.http.get<Category>(`${BASEURL}/category`,{
      headers: {
        'Authorization': `Bearer ${this.token}`
      }})
  }
  public addCategory(category: Category) {
    return this.http.post(`${BASEURL}/category`, category, {
      headers: {
        'Authorization': `Bearer ${this.token}`
      }})
  }
}


