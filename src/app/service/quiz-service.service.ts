import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from './helper';
import { Quiz, Tests } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }
  public getQuiz(id: number) {
    return this.http.get<Quiz[]>(`${BASEURL}/quiz/test/${id}`);
  }

  public getQuizById(id:number){
    return this.http.get<Quiz>(`${BASEURL}/quiz/${id}`);
  }

  public saveQuiz(quiz: any) {
    return this.http.post<Quiz>(`${BASEURL}/quiz`, quiz);
  }

  public deleteQuiz(id: number) {
    return this.http.delete<any>(`${BASEURL}/quiz/${id}`);
  }

  public updateQuiz(quiz: any) {
    return this.http.put<Quiz>(`${BASEURL}/quiz`, quiz);
  }

  public checkListOfQuiz(listOfQuiz: Quiz[]){
    return this.http.post<any>(`${BASEURL}/quiz/checkListOfQuiz`, listOfQuiz);
  }
}
