import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test-service.service';
import { Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.scss']
})
export class ViewTestComponent implements OnInit{
constructor(private testService: TestService){}
  tests:Tests[] | any = []

  deleteTest(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then((result) => {
      if(result.isConfirmed){
        this.testService.deleteTest(id).subscribe(data => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.ngOnInit();
        },
        (error)=>{
          Swal.fire('Error','Something went wrong','error')
        });
      }
    })
  }

  ngOnInit(): void {
    this.testService.getTest().subscribe(data => {
      this.tests = data;
      console.log(data);
    },
    (error)=>{
      Swal.fire('Error','Something went wrong','error')
    });   
  }
}
