import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { TestService } from 'src/app/service/test-service.service';
import { Category, Tests } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit{
  category : Category| any=[]
  newTest: Tests| any={
    category: {
      id: 0
    }
  }
  
  constructor(private categoryService: CategoryService, private snack : MatSnackBar, private testService: TestService,private route: Router){}
  
  ngOnInit(): void {
      this.categoryService.getCategories().subscribe(data=>{
        this.category=data
      }, 
      (error)=>{
        Swal.fire('Error', 'Error al obtener las categorias', 'error')
      })
  }

  handleSubmit(formdata : NgForm){
    console.log(this.newTest)
    if(this.newTest.title.trim()==="" || this.newTest.description.trim()==="" || this.newTest.category.id===0){
      this.snack.open("Complete all fields", "Cerrar", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "top"
      })
      return;
    }
      this.testService.creteTest(this.newTest).subscribe(data=>{
        formdata.resetForm()
        console.log(data)
        Swal.fire('Success', 'Test created successfully', 'success')
        this.route.navigate(['/admin/test'])
      })
      
  }

}

