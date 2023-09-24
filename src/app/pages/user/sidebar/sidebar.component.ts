import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/utils/types';

@Component({
  selector: 'app-sidebarUser',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponentUser {
  categories: Category|any;
  constructor(private categoriesService: CategoryService){
    categoriesService.getCategories().subscribe(data=>{
      console.log(data)
      this.categories = data;
    })
  }
}
