import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz-service.service';
import { TestService } from 'src/app/service/test-service.service';
import { Quiz, Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizbytest',
  templateUrl: './view-quizbytest.component.html',
  styleUrls: ['./view-quizbytest.component.scss']
})
export class ViewQuizbytestComponent implements OnInit{
  constructor(private route: ActivatedRoute, private quizService: QuizService, testService: TestService ) { 
    this.id= this.route.snapshot.params['id'];  
    this.quizService.getQuiz(this.id).subscribe((data)=>{
        this.quiz=data;
        this.title=this.quiz[0].test.title;
        console.log(data)
    },
      (error)=>{
        Swal.fire('Error','Something went wrong','error')
      });
  
  }
  id=0;
  quiz:Quiz[] | any=[];
  title='';

  ngOnInit(): void {
  }  

  public deleteQuiz(id:number){
    const quizIndex= this.quiz.findIndex((quiz:Quiz)=>quiz.id==id);
    const data= this.quiz[quizIndex];
    this.quiz.splice(quizIndex,1);
    this.quizService.deleteQuiz(id).subscribe(()=>{
      Swal.fire('Success','Quiz deleted successfully','success')
    },
    (error:any)=>{
      Swal.fire('Error','Something went wrong','error')
      this.quiz.splice(quizIndex,0,data);
      console.error(error)
    })
  }
  

}
