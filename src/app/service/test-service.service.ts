import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from './helper';
import { Tests } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getTest() {
    return this.http.get<Tests>(`${BASEURL}/test`);
  }

  public creteTest(test: Tests) {
    return this.http.post<Tests>(`${BASEURL}/test`, test);
  }

  public deleteTest(id: number) {
    return this.http.delete(`${BASEURL}/test/${id}`);
  }
  public getTestsByCategory(id: number) {
    return this.http.get<Tests>(`${BASEURL}/test/category/${id}`);
  }

  public getTestById(id: number) {
    return this.http.get<Tests>(`${BASEURL}/test/${id}`);
  }

  public updateTest(test: Tests) {
    return this.http.put<Tests>(`${BASEURL}/test`, test);
  }

  public getTestActive(){
    return this.http.get<Tests>(`${BASEURL}/test/active`);
  }

  public getTestActiveByCategory(id: number){
    return this.http.get<Tests>(`${BASEURL}/test/categoryActive/${id}`);
  }

}
