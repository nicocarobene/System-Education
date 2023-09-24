import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent {
  id=0;
  title='title'
  updateQuiz: any;
  constructor(private quizService: QuizService, private router: Router, route: ActivatedRoute, private snack: MatSnackBar) { 
    const id=route.snapshot.params['id'];
    this.id= id
    quizService.getQuizById(id).subscribe(quiz=>{
      this.updateQuiz=quiz
      this.title= quiz.test.title
    });

  }

  handleSubmit(formdata:NgForm){
    if(
      this.updateQuiz.content.trim() === '' ||
      this.updateQuiz.option1.trim() === '' ||
      this.updateQuiz.option2.trim() === '' ||
      this.updateQuiz.option3.trim() === '' ||
      this.updateQuiz.option4.trim() === '' ||
      this.updateQuiz.correctAnswer.trim() === '' 
      ){
      this.snack.open("Please fill all the fields", "OK", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top"
      })
      return;
    }
    console.log(this.updateQuiz)
    this.quizService.updateQuiz(this.updateQuiz).subscribe(data=>{ 
      formdata.resetForm()
      Swal.fire('Success','Quiz created successfully','success')
      this.router.navigate(['admin/viewQuizTest/',this.updateQuiz.test.id])
    },
    error=>{
     Swal.fire('Error','Error creating quiz','error') 
     console.error(error)
    })
  }


}
