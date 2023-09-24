import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz-service.service';
import { Quiz, Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {
  timer=0;
  started=false;
  test: any|Quiz[];
  id:any| number;
  pointsAchievedt=0;
  pointOfQuiz=0
  correctAnswers=0;
  attempts=0;
  constructor(
    private locationStatretgi: LocationStrategy,
    private route: ActivatedRoute,
    private quizService: QuizService
    ){
      this.id= route.snapshot.params['id']
  }
  ngOnInit(): void {
    history.pushState(null, null!, location.href)
    this.locationStatretgi.onPopState(() => {
     history.pushState(null, null!, location.href)
    })
    console.log(history)
    this.quizService.getQuiz(this.id).subscribe(res=>{
      this.test=res
      this.pointOfQuiz = Number(res[0].test.maxNote)/Number(res[0].test.maxNumOfQuiz)
      this.timer= Number(this.test.length)*2*60
      console.log(this.timer)
      this.startTemporizador()
      console.log(res)
    },
    (err)=>{
      Swal.fire('Error','Something went wrong','error')
    }
    )
  }
  private startTemporizador(){
    const time= setInterval(()=>{
      if(this.timer===0){
        clearInterval(time)
        this.started=true
      }
      if(this.timer>0){
        this.timer--
      }
    }, 1000)
  }
  public handleClick(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, finish test!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.started=true
        this.quizService.checkListOfQuiz(this.test).subscribe(res=>{
          console.log(res)
          this.correctAnswers= res.CorrectAnswer
          this.attempts= res.Atemps
          this.pointsAchievedt= res.CorrectAnswer
        },
        (err)=>{
          Swal.fire('Error','Something went wrong','error')
        })  
      }
    })
  }

  getRelativeTimer(){
    const mm= Math.floor(this.timer/60)
    const ss= this.timer-(mm*60)
    return `${mm}:${ss}`
  }

  public printPage(){
    window.print()
  }
}
  

