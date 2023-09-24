import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz-service.service';
import { Quiz } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
    id!:number;
    title:string ="title"
    quiz: Quiz[] | any = [] ;
    newQuiz: Quiz | any ={}
    constructor(private route: ActivatedRoute, private quizService: QuizService, private snack: MatSnackBar, private router: Router) {
    
    }

    ngOnInit() {
      const id = this.route.snapshot.params['id']
      this.id=id
      console.log(id)
      this.quizService.getQuiz(id).subscribe(data=>{
        this.quiz=data
        console.log(data, id)
         


        console.log(data,this.quiz, this.id)
      })
    }

    handleSubmit(formdata:NgForm){
      if(
        this.newQuiz.content.trim() === '' ||
        this.newQuiz.option1.trim() === '' ||
        this.newQuiz.option2.trim() === '' ||
        this.newQuiz.option3.trim() === '' ||
        this.newQuiz.option4.trim() === '' ||
        this.newQuiz.correctAnswer.trim() === '' 
        ){
        this.snack.open("Please fill all the fields", "OK", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "top"
        })
        return;
      }
      this.newQuiz.test= {id:this.id}
      this.newQuiz.img= 'poo.png'
      console.log(this.newQuiz)
      this.quizService.saveQuiz(this.newQuiz).subscribe(data=>{ 
        formdata.resetForm()
        Swal.fire('Success','Quiz created successfully','success')
        this.router.navigate(['admin/viewQuizTest/',this.id])
      },
      error=>{
       Swal.fire('Error','Error creating quiz','error') 
       console.error(error)
      })
      
    }
}
