import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/service/test-service.service';
import { Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit{
  id=0
  test: Tests | any;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private testService: TestService
  ) { 
   this.id = router.snapshot.params['id']
  }
    ngOnInit(){
      this.testService.getTestById(this.id).subscribe(data => {
        this.test = data;
      },
      (error)=>{
        Swal.fire('Error','Something went wrong','error')
      }); 
    }

    public handleClick(){
      Swal.fire({
        title: 'Are you ready?',
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
        icon: 'question',
      }).then((result) => {
        if(result.isConfirmed){
          this.route.navigate(['user/startTest/',this.id])
        }})
  }

}
