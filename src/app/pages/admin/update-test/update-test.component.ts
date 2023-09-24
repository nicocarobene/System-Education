import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { TestService } from 'src/app/service/test-service.service';
import { Category, Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.scss']
})
export class UpdateTestComponent implements OnInit {
  id!:number;
  test: Tests | any;
  categories:Category | any;
  constructor(
    private testService: TestService, 
    private router: Router, 
    private rout:ActivatedRoute,
    private categoryService: CategoryService
    ){}
  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.testService.getTestById(this.id).subscribe(data=>{
      this.test=data;
    },
    (error)=>{
      Swal.fire('Error','Something went wrong','error')
    }); 

    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
      console.log(data)
      },
      (error)=>{
        Swal.fire('Error','Something went wrong','error')
      });
  }
  public handleSubmit(formdata:NgForm){
    this.testService.updateTest(this.test).subscribe(()=>{
      Swal.fire('Success','Test updated successfully','success')
      this.router.navigate(['/admin/test'])
      formdata.resetForm();
    },
    ()=>{
      Swal.fire('Error','Something went wrong','error')
    }) 
  }
}
