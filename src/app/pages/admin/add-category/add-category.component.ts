import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/utils/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  constructor(private categoryService: CategoryService,  private snack: MatSnackBar, private route: Router) { }
  public category: Category = {
    title: '',
    description: ''
  }
  onSubmit(formdata:NgForm){
    if(this.category.description.trim() === '' || this.category.title.trim() === ''){
      this.snack.open('Please fill in all the fields', '', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
      return;
    }   
      this.categoryService.addCategory(this.category).subscribe(date=>{
        formdata.resetForm()
        Swal.fire('Category added','Categories added successfully','success')
        this.route.navigate(['/admin/category'])
      },
      (error)=>{
        Swal.fire('Error adding categories','error')
        console.error(error)
      })
  }
}   
